import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { DollarSign, User, Phone, Mail, Home, Calculator, Calendar, CreditCard, PiggyBank } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FinancingQuoteDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export function FinancingQuoteDialog({ open, setOpen, trigger }: FinancingQuoteDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    currentElectricBill: "",
    preferredFinancingOption: "solar_loan",
    creditScore: "",
    preferredLoanTerm: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Financing quote request:", formData);
    
    // Show success toast
    toast.success("Your custom financing quote request has been submitted! Our financial advisors will contact you within 24 hours.", {
      duration: 5000,
    });
    
    // Reset form and close dialog
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      propertyType: "",
      currentElectricBill: "",
      preferredFinancingOption: "solar_loan",
      creditScore: "",
      preferredLoanTerm: "",
      additionalInfo: "",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get Your Custom Solar Financing Quote</DialogTitle>
          <DialogDescription>
            Complete this form to receive a personalized financing plan tailored to your needs. Our financial advisors will help you find the most advantageous option.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-sunfinity-500" />
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sunfinity-500" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sunfinity-500" />
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 555-5555"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="propertyType" className="flex items-center gap-2">
                <Home className="h-4 w-4 text-sunfinity-500" />
                Property Type
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange("propertyType", value)}
                value={formData.propertyType}
              >
                <SelectTrigger id="propertyType">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single_family">Single Family Home</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="condo">Condominium</SelectItem>
                  <SelectItem value="multi_family">Multi-Family Building</SelectItem>
                  <SelectItem value="commercial">Commercial Property</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <Home className="h-4 w-4 text-sunfinity-500" />
                Property Address
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St, City, State, ZIP"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="currentElectricBill" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-sunfinity-500" />
                Monthly Electric Bill
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange("currentElectricBill", value)}
                value={formData.currentElectricBill}
              >
                <SelectTrigger id="currentElectricBill">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="less_than_100">Less than $100</SelectItem>
                  <SelectItem value="100_200">$100 - $200</SelectItem>
                  <SelectItem value="200_300">$200 - $300</SelectItem>
                  <SelectItem value="300_400">$300 - $400</SelectItem>
                  <SelectItem value="400_500">$400 - $500</SelectItem>
                  <SelectItem value="more_than_500">More than $500</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="creditScore" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-sunfinity-500" />
                Credit Score Range (Optional)
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange("creditScore", value)}
                value={formData.creditScore}
              >
                <SelectTrigger id="creditScore">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent (720+)</SelectItem>
                  <SelectItem value="good">Good (690-719)</SelectItem>
                  <SelectItem value="fair">Fair (630-689)</SelectItem>
                  <SelectItem value="poor">Below 630</SelectItem>
                  <SelectItem value="unsure">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <Label className="flex items-center gap-2">
                <PiggyBank className="h-4 w-4 text-sunfinity-500" />
                Preferred Financing Option
              </Label>
              <RadioGroup 
                defaultValue="solar_loan"
                value={formData.preferredFinancingOption}
                onValueChange={(value) => handleSelectChange("preferredFinancingOption", value)}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="solar_loan" id="solar_loan" />
                  <Label htmlFor="solar_loan" className="cursor-pointer">Solar Loan</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="solar_lease" id="solar_lease" />
                  <Label htmlFor="solar_lease" className="cursor-pointer">Solar Lease</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value="ppa" id="ppa" />
                  <Label htmlFor="ppa" className="cursor-pointer">Power Purchase Agreement</Label>
                </div>
              </RadioGroup>
            </div>
            
            {formData.preferredFinancingOption === "solar_loan" && (
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="preferredLoanTerm" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-sunfinity-500" />
                  Preferred Loan Term
                </Label>
                <Select 
                  onValueChange={(value) => handleSelectChange("preferredLoanTerm", value)}
                  value={formData.preferredLoanTerm}
                >
                  <SelectTrigger id="preferredLoanTerm">
                    <SelectValue placeholder="Select loan term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5_year">5 Year</SelectItem>
                    <SelectItem value="10_year">10 Year</SelectItem>
                    <SelectItem value="15_year">15 Year</SelectItem>
                    <SelectItem value="20_year">20 Year</SelectItem>
                    <SelectItem value="25_year">25 Year</SelectItem>
                    <SelectItem value="unsure">Not Sure (We'll Recommend Best Options)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="additionalInfo" className="flex items-center gap-2">
                Additional Information
              </Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Tell us about any specific needs or questions about solar financing..."
                className="min-h-[100px]"
              />
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              type="submit"
              className="w-full bg-sunfinity-500 hover:bg-sunfinity-600 text-white"
            >
              Request Your Custom Financing Quote
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 