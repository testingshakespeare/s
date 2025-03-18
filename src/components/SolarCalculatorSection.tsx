import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Calculator, Sun, DollarSign, Leaf, LineChart, BarChart3, Home, Zap, BatteryCharging, Wrench, Percent } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Sample location data with sunlight hours
const locationData = [
  { name: "Washington, DC", sunHours: 4.7, electricityRate: 0.13, netMeteringRate: 0.13 }, // 1:1 net metering
  { name: "Great Falls, VA", sunHours: 4.8, electricityRate: 0.12, netMeteringRate: 0.12 }, // 1:1 net metering
  { name: "Mclean, VA", sunHours: 4.8, electricityRate: 0.12, netMeteringRate: 0.12 }, // 1:1 net metering
  { name: "Fairfax, VA", sunHours: 4.7, electricityRate: 0.125, netMeteringRate: 0.125 }, // 1:1 net metering
  { name: "Bethesda, MD", sunHours: 4.6, electricityRate: 0.135, netMeteringRate: 0.08 }, // wholesale rate for excess
  { name: "Silver Spring, MD", sunHours: 4.6, electricityRate: 0.135, netMeteringRate: 0.08 } // wholesale rate for excess
];

// Sample roof direction data with efficiency multipliers
const roofDirections = [
  { name: "South", efficiency: 1.0 },
  { name: "Southwest", efficiency: 0.9 },
  { name: "Southeast", efficiency: 0.9 },
  { name: "East", efficiency: 0.8 },
  { name: "West", efficiency: 0.8 },
  { name: "North", efficiency: 0.6 }
];

// Average solar panel specs
const PANEL_SIZE_SQFT = 17.5; // Average size of a residential solar panel in square feet
const PANEL_WATTAGE = 350; // Average watts per panel
const ANNUAL_DEGRADATION_RATE = 0.005; // 0.5% degradation per year
const ANNUAL_ELECTRICITY_PRICE_INCREASE = 0.03; // 3% annual increase in electricity prices
const SYSTEM_LOSSES = 0.2; // 20% system losses (inverter, wiring, etc.)

export const SolarCalculatorSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  // Form state
  const [monthlyBill, setMonthlyBill] = useState<number>(200);
  const [location, setLocation] = useState<string>(locationData[0].name);
  const [roofSize, setRoofSize] = useState<number>(1500);
  const [roofDirection, setRoofDirection] = useState<string>(roofDirections[0].name);
  const [includeMaintenanceCosts, setIncludeMaintenanceCosts] = useState<boolean>(true);
  const [annualMaintenanceCost, setAnnualMaintenanceCost] = useState<number>(300); // Default $300/year
  const [includeBattery, setIncludeBattery] = useState<boolean>(false);
  
  // Results state
  const [results, setResults] = useState<{
    systemSize: number;
    panelCount: number;
    roofSpaceNeeded: number;
    upfrontCost: number;
    batteryCost: number;
    taxCredit: number;
    finalCost: number;
    annualSavings: number[];
    cumulativeSavings: number[];
    maintenanceCosts: number;
    totalMaintenanceCosts: number;
    netSavings: number;
    breakEvenYear: number;
    co2Reduction: number;
    treesEquivalent: number;
    roofSpaceExceeded: boolean;
  } | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Calculate the solar savings
  const calculateSavings = () => {
    // Find the selected location and roof direction
    const selectedLocation = locationData.find(loc => loc.name === location) || locationData[0];
    const selectedRoofDirection = roofDirections.find(dir => dir.name === roofDirection) || roofDirections[0];
    
    // Calculate annual consumption in kWh
    const monthlyConsumptionKWh = monthlyBill / selectedLocation.electricityRate;
    const annualConsumptionKWh = monthlyConsumptionKWh * 12;
    
    // Calculate system size using improved formula
    // System Size (kW) = (Annual Consumption × 1.2) / (Sun Hours × 365 × Panel Efficiency)
    // The 1.2 factor accounts for system losses
    const systemSize = (annualConsumptionKWh * (1 + SYSTEM_LOSSES)) / 
                      (selectedLocation.sunHours * 365 * selectedRoofDirection.efficiency);
    
    // Calculate number of panels needed
    const panelCount = Math.ceil(systemSize * 1000 / PANEL_WATTAGE);
    
    // Calculate roof space needed in square feet
    const roofSpaceNeeded = panelCount * PANEL_SIZE_SQFT;
    
    // Check if roof space is exceeded
    const roofSpaceExceeded = roofSpaceNeeded > roofSize;
    
    // Adjust system size if roof space is exceeded
    const adjustedSystemSize = roofSpaceExceeded 
      ? (roofSize / PANEL_SIZE_SQFT) * (PANEL_WATTAGE / 1000)
      : systemSize;
    
    // Estimated cost: $3,000 per kW before incentives (average in the US)
    const upfrontCost = adjustedSystemSize * 3000;
    
    // Battery cost if selected (avg $10k per battery system)
    const batteryCost = includeBattery ? 10000 : 0;
    
    // 30% federal tax credit
    const taxCredit = (upfrontCost + batteryCost) * 0.3;
    
    // Final cost after tax credit
    const finalCost = upfrontCost + batteryCost - taxCredit;
    
    // Calculate yearly production and savings with degradation
    const annualSavings: number[] = [];
    const cumulativeSavings: number[] = [];
    let totalSavings = 0;
    let breakEvenYear = 0;
    
    // Calculate maintenance costs over 25 years
    const maintenanceCost = includeMaintenanceCosts ? annualMaintenanceCost : 0;
    const totalMaintenanceCosts = maintenanceCost * 25;
    
    for (let year = 1; year <= 25; year++) {
      // Apply panel degradation (0.5% per year)
      const degradationFactor = Math.pow(1 - ANNUAL_DEGRADATION_RATE, year - 1);
      
      // Annual production adjusted for degradation (kWh)
      const annualProduction = adjustedSystemSize * selectedLocation.sunHours * 365 * 
                               selectedRoofDirection.efficiency * degradationFactor;
      
      // Electricity price with annual increase
      const electricityPrice = selectedLocation.electricityRate * 
                               Math.pow(1 + ANNUAL_ELECTRICITY_PRICE_INCREASE, year - 1);
      
      // Calculate savings based on net metering rate
      let yearlySavings = 0;
      
      if (annualProduction <= annualConsumptionKWh) {
        // All production is used to offset consumption
        yearlySavings = annualProduction * electricityPrice;
      } else {
        // Excess is sold back to grid at net metering rate
        const consumptionOffset = annualConsumptionKWh * electricityPrice;
        const excessProduction = (annualProduction - annualConsumptionKWh);
        const netMeteringPrice = selectedLocation.netMeteringRate * 
                                Math.pow(1 + ANNUAL_ELECTRICITY_PRICE_INCREASE, year - 1);
        const excessCredit = excessProduction * netMeteringPrice;
        
        yearlySavings = consumptionOffset + excessCredit;
      }
      
      // Account for battery benefits if included (higher self-consumption)
      if (includeBattery) {
        // Battery increases self-consumption by ~15% on average
        yearlySavings *= 1.15;
      }
      
      // Subtract maintenance costs
      const yearlyNetSavings = yearlySavings - maintenanceCost;
      
      annualSavings.push(Math.round(yearlyNetSavings));
      totalSavings += yearlyNetSavings;
      cumulativeSavings.push(Math.round(totalSavings));
      
      // Determine break-even point (if not already found)
      if (breakEvenYear === 0 && totalSavings >= finalCost) {
        breakEvenYear = year;
      }
    }
    
    // If we never reach breakeven within 25 years
    if (breakEvenYear === 0 && totalSavings >= finalCost / 2) {
      // Estimate breakeven beyond 25 years using the final year's savings rate
      const remainingToBreakEven = finalCost - totalSavings;
      const finalYearSavings = annualSavings[24]; // Last year's savings
      const additionalYears = Math.ceil(remainingToBreakEven / finalYearSavings);
      breakEvenYear = 25 + additionalYears;
    } else if (breakEvenYear === 0) {
      breakEvenYear = 99; // Effectively never breaks even
    }
    
    // Environmental impact
    // Average US household emits about 5.4 metric tons of CO2 per year from electricity
    // Adjust for degradation over 25 years
    let totalProduction = 0;
    for (let year = 1; year <= 25; year++) {
      const degradationFactor = Math.pow(1 - ANNUAL_DEGRADATION_RATE, year - 1);
      totalProduction += adjustedSystemSize * selectedLocation.sunHours * 365 * 
                         selectedRoofDirection.efficiency * degradationFactor;
    }
    
    // CO2 reduction (0.85 lbs CO2 per kWh for grid electricity)
    const co2ReductionLbs = totalProduction * 0.85;
    const co2Reduction = co2ReductionLbs / 2204.62; // Convert to metric tons (1 metric ton = 2204.62 lbs)
    
    // One tree absorbs about 25 pounds of CO2 per year (0.0113 metric tons)
    const treesEquivalent = Math.round(co2Reduction / (0.0113 * 25));
    
    const results = {
      systemSize: Math.round(adjustedSystemSize * 10) / 10, // round to 1 decimal place
      panelCount: Math.ceil(roofSpaceExceeded ? roofSize / PANEL_SIZE_SQFT : panelCount),
      roofSpaceNeeded: Math.round(roofSpaceNeeded),
      upfrontCost: Math.round(upfrontCost),
      batteryCost,
      taxCredit: Math.round(taxCredit),
      finalCost: Math.round(finalCost),
      annualSavings,
      cumulativeSavings,
      maintenanceCosts: maintenanceCost,
      totalMaintenanceCosts,
      netSavings: Math.round(totalSavings),
      breakEvenYear,
      co2Reduction: Math.round(co2Reduction),
      treesEquivalent,
      roofSpaceExceeded
    };
    
    setResults(results);
    
    // Show success toast or warning if roof space is exceeded
    if (roofSpaceExceeded) {
      toast.warning("Your roof size is too small for the optimal system. We've adjusted the calculation.");
    } else {
      toast.success("Your solar savings have been calculated!");
    }
  };

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="pt-32 pb-24 relative bg-gradient-to-b from-white to-sunfinity-50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunfinity-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow animation-delay-500"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            <p className="text-sunfinity-800 text-sm font-medium">Calculate Your Savings</p>
          </div>
          <h1 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            Solar Savings Calculator
          </h1>
          <p 
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            Find out how much you could save by switching to solar energy. Our calculator provides personalized estimates based on your energy usage and location.
          </p>
        </div>

        <div 
          className={cn(
            "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 transition-all duration-700 opacity-0 translate-y-8",
            loaded && "opacity-100 translate-y-0"
          )}
        >
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <div className="glass-panel rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-sunfinity-500" />
                <h2 className="text-2xl font-bold">Input Your Details</h2>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="monthlyBill" className="text-sm font-medium">Monthly Electric Bill</Label>
                    <span className="text-sunfinity-700 font-medium">{formatCurrency(monthlyBill)}</span>
                  </div>
                  <Slider
                    id="monthlyBill"
                    min={50}
                    max={500}
                    step={10}
                    value={[monthlyBill]}
                    onValueChange={(values) => setMonthlyBill(values[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$50</span>
                    <span>$500</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium">Your Location</Label>
                  <Select
                    value={location}
                    onValueChange={setLocation}
                  >
                    <SelectTrigger className="w-full rounded-lg">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locationData.map((loc) => (
                        <SelectItem key={loc.name} value={loc.name}>
                          {loc.name} ({loc.sunHours} sun hours/day)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="roofSize" className="text-sm font-medium">Approximate Roof Size (sq ft)</Label>
                    <span className="text-sunfinity-700 font-medium">{roofSize} sq ft</span>
                  </div>
                  <Slider
                    id="roofSize"
                    min={500}
                    max={3000}
                    step={100}
                    value={[roofSize]}
                    onValueChange={(values) => setRoofSize(values[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>500 sq ft</span>
                    <span>3000 sq ft</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roofDirection" className="text-sm font-medium">Roof Direction</Label>
                  <Select
                    value={roofDirection}
                    onValueChange={setRoofDirection}
                  >
                    <SelectTrigger className="w-full rounded-lg">
                      <SelectValue placeholder="Select direction" />
                    </SelectTrigger>
                    <SelectContent>
                      {roofDirections.map((dir) => (
                        <SelectItem key={dir.name} value={dir.name}>
                          {dir.name} ({Math.round(dir.efficiency * 100)}% efficiency)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-6 pt-2">
                  <div className="space-y-2 border-t pt-4">
                    <h3 className="text-base font-medium mb-2">Additional Options</h3>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="includeBattery" 
                        checked={includeBattery}
                        onCheckedChange={(checked) => setIncludeBattery(checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="includeBattery"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          <BatteryCharging className="w-4 h-4 mr-1 text-sunfinity-500" />
                          Include Battery Storage (+$10,000)
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Increases self-consumption and provides backup power
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 mt-3">
                      <Checkbox 
                        id="includeMaintenanceCosts" 
                        checked={includeMaintenanceCosts}
                        onCheckedChange={(checked) => setIncludeMaintenanceCosts(checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="includeMaintenanceCosts"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          <Wrench className="w-4 h-4 mr-1 text-sunfinity-500" />
                          Include Maintenance Costs
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Annual costs for inverter replacement fund & maintenance
                        </p>
                      </div>
                    </div>
                    
                    {includeMaintenanceCosts && (
                      <div className="mt-2 pl-6">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <Label htmlFor="maintenanceCost" className="text-xs font-medium">Annual Maintenance</Label>
                            <span className="text-sm text-sunfinity-700 font-medium">{formatCurrency(annualMaintenanceCost)}</span>
                          </div>
                          <Slider
                            id="maintenanceCost"
                            min={200}
                            max={500}
                            step={50}
                            value={[annualMaintenanceCost]}
                            onValueChange={(values) => setAnnualMaintenanceCost(values[0])}
                            className="py-2"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>$200</span>
                            <span>$500</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Button 
                  onClick={calculateSavings}
                  className="w-full px-8 py-6 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Calculate Savings
                </Button>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-6 h-6 text-sunfinity-500" />
                <h2 className="text-2xl font-bold">Your Solar Potential</h2>
              </div>
              
              {results ? (
                <div className="space-y-8">
                  {results.roofSpaceExceeded && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 text-sm">
                      <p className="font-medium">Roof Size Limitation</p>
                      <p>Your roof size ({roofSize} sq ft) is smaller than the optimal system would require ({results.roofSpaceNeeded} sq ft). We've adjusted the calculation to fit your available space.</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border border-border/50 shadow-sm">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-sunfinity-500" />
                          <h3 className="font-semibold">System Size</h3>
                        </div>
                        <p className="text-2xl font-bold text-sunfinity-700">{results.systemSize} kW</p>
                        <p className="text-sm text-muted-foreground">{results.panelCount} panels ({PANEL_WATTAGE}W each)</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border/50 shadow-sm">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Home className="w-5 h-5 text-sunfinity-500" />
                          <h3 className="font-semibold">Break-Even Point</h3>
                        </div>
                        <p className="text-2xl font-bold text-sunfinity-700">
                          {results.breakEvenYear < 99 ? `${results.breakEvenYear} years` : "N/A"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {results.breakEvenYear < 99 
                            ? "To recoup your investment" 
                            : "System may not break even in its lifetime"}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-sunfinity-500" />
                      Financial Breakdown
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Solar System Cost</span>
                        <span className="font-semibold">{formatCurrency(results.upfrontCost)}</span>
                      </div>
                      {results.batteryCost > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Battery Storage Cost</span>
                          <span className="font-semibold">{formatCurrency(results.batteryCost)}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Federal Tax Credit (30%)</span>
                        <span className="font-semibold text-green-600">- {formatCurrency(results.taxCredit)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Final System Cost</span>
                        <span className="font-semibold">{formatCurrency(results.finalCost)}</span>
                      </div>
                      {results.maintenanceCosts > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-muted-foreground">25-Year Maintenance Costs</span>
                          <span className="font-semibold text-amber-600">{formatCurrency(results.totalMaintenanceCosts)}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">First Year Savings</span>
                        <span className="font-semibold text-green-600">{formatCurrency(results.annualSavings[0])}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">25-Year Net Savings</span>
                        <span className="font-bold text-green-600">{formatCurrency(results.netSavings)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Percent className="w-5 h-5 text-sunfinity-500" />
                      System Performance Over Time
                    </h3>
                    <div className="space-y-1 mb-2">
                      <p className="text-sm text-muted-foreground mb-3">
                        Solar panels degrade at approximately 0.5% per year, producing less energy over time. 
                        Our calculation includes this degradation effect.
                      </p>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-sunfinity-400 to-sunfinity-100 rounded-full" style={{ width: "87.5%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Year 1: 100%</span>
                        <span>Year 25: 87.5%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-green-600" />
                      Environmental Impact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground">CO₂ Reduction (25 years)</span>
                        <span className="font-semibold">{results.co2Reduction} metric tons</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Equivalent to Planting</span>
                        <span className="font-semibold text-green-600">{results.treesEquivalent} trees</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => {
                      toast.success("Great! We'll reach out soon with a personalized quote.");
                      // Redirect to the home page's quote form
                      window.location.href = "/#quote-form";
                    }}
                    className="w-full md:w-auto px-8 py-6 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Get Personalized Quote
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] space-y-4 text-center">
                  <LineChart className="w-16 h-16 text-sunfinity-200" />
                  <h3 className="text-xl font-semibold">Your Savings Results Will Appear Here</h3>
                  <p className="text-muted-foreground max-w-md">
                    Fill out the form on the left with your information to calculate your potential solar savings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Information section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Why Go Solar with Sunfinity?</h2>
            <p className="text-muted-foreground">
              Switching to solar isn't just good for the environment—it's a smart financial decision too.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
              <div className="w-12 h-12 bg-sunfinity-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-sunfinity-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Financial Benefits</h3>
              <p className="text-muted-foreground text-sm">
                Lower monthly bills, protection from rising energy costs, increased property value, and attractive tax incentives.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Environmental Impact</h3>
              <p className="text-muted-foreground text-sm">
                Reduce your carbon footprint, help combat climate change, and contribute to a cleaner, more sustainable future.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border/50">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Energy Independence</h3>
              <p className="text-muted-foreground text-sm">
                Take control of your energy production, reduce reliance on the grid, and protect against power outages with battery storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 