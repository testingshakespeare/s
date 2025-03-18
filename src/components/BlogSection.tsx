import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sun, 
  DollarSign, 
  Leaf, 
  Home, 
  Battery, 
  Tag, 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  ChevronRight,
  X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import "./blog-styles.css";

// Categories with icons
const categories = [
  { name: "Solar Technology", icon: <Sun className="h-4 w-4" />, slug: "solar-technology" },
  { name: "Cost Savings", icon: <DollarSign className="h-4 w-4" />, slug: "cost-savings" },
  { name: "Sustainability", icon: <Leaf className="h-4 w-4" />, slug: "sustainability" },
  { name: "Home Improvement", icon: <Home className="h-4 w-4" />, slug: "home-improvement" },
  { name: "Energy Storage", icon: <Battery className="h-4 w-4" />, slug: "energy-storage" }
];

// Generate recent random dates within the last 3 months
const getRandomDate = () => {
  const today = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(today.getMonth() - 3);
  
  const randomTime = threeMonthsAgo.getTime() + Math.random() * (today.getTime() - threeMonthsAgo.getTime());
  return new Date(randomTime);
};

// Format date
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "2023 Solar Tax Credits: What Homeowners Need to Know",
    excerpt: "The federal solar tax credit has been extended and expanded under the Inflation Reduction Act. Learn how you can save 30% on your solar installation through 2032.",
    content: `
      <p>The Inflation Reduction Act of 2022 brought <strong>incredible financial opportunities</strong> for homeowners considering solar energy. The federal solar Investment Tax Credit (ITC), which was previously set to decrease, has been extended at 30% through 2032. This means you can deduct 30% of the cost of installing a solar energy system from your federal taxes—essentially getting nearly a third of your system <em>paid for by the government</em>.</p>
      
      <h3>How the Solar Tax Credit Transforms Your Investment</h3>
      <p>This tax credit doesn't just reduce your tax bill—it fundamentally changes the economics of going solar. Here's how this powerful financial incentive works for you:</p>
      <ul>
        <li>Purchase and install a solar panel system in 2023 with Sunfinity's expert team</li>
        <li>Claim the 30% tax credit when you file your taxes (that's $7,500 on a $25,000 system!)</li>
        <li>There is <strong>no cap</strong> on the amount you can claim—larger systems mean larger tax savings</li>
        <li>The credit can be carried forward to future tax years if you can't use it all immediately</li>
      </ul>
      
      <p>While many of our customers at Sunfinity see their solar investment break even in 7-10 years, this tax credit accelerates your payback period significantly. A system that might have taken 10 years to pay for itself might now pay for itself in just 7 years—after which you're essentially generating <em>free electricity</em> for decades.</p>
      
      <h3>What's Covered by the Tax Credit?</h3>
      <p>The 30% credit applies to more than just the panels themselves:</p>
      <ul>
        <li>Solar panels or PV cells</li>
        <li>All professional installation labor costs</li>
        <li>System equipment including wiring, inverters, and mounting hardware</li>
        <li>Energy storage devices, including home batteries (even when added later!)</li>
        <li>Sales taxes on eligible expenses</li>
      </ul>
      
      <p>At Sunfinity, we ensure that every eligible component is properly documented so you can maximize your tax credit. Our solar consultants provide comprehensive guidance on all available incentives, not just federal tax credits but also state and local rebates that can reduce your costs even further.</p>
      
      <h3>Why 2023 Is the Perfect Time to Go Solar</h3>
      <p>While the 30% tax credit is guaranteed through 2032, there are compelling reasons not to wait:</p>
      <ol>
        <li><strong>Electricity costs are rising</strong> at 3-5% annually in most regions—every month you wait is costing you money</li>
        <li><strong>Installation costs are currently stabilized</strong> but supply chain issues could drive prices up in the future</li>
        <li><strong>Begin generating immediate savings</strong> on your monthly bills while building equity in your home</li>
        <li><strong>Secure your energy independence now</strong> rather than remaining vulnerable to utility rate hikes</li>
      </ol>
      
      <p>Our Sunfinity customers who installed solar in early 2023 are already seeing dramatic reductions in their electricity bills, some eliminating them entirely. Many express their only regret is not having gone solar sooner.</p>
      
      <p>Ready to transform your energy future while taking advantage of these historic tax incentives? Use our <a href="/solar-calculator">Solar Savings Calculator</a> to see your personalized savings estimate, or <a href="/#quote-form">schedule a free consultation</a> with one of our solar experts today.</p>
    `,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: getRandomDate(),
    author: "Jennifer Martinez",
    authorTitle: "Financial Specialist",
    categories: ["Cost Savings", "Solar Technology"],
    featured: true
  },
  {
    id: 2,
    title: "How Solar Panels Increase Your Home's Value",
    excerpt: "Recent studies show that homes with solar energy systems sell for 4.1% more than comparable non-solar homes. Learn how solar can boost your property value.",
    content: `
      <p>When homeowners install solar panels, they're not just reducing monthly electricity bills—they're making one of the smartest long-term investments in their property's value. At Sunfinity, we've witnessed firsthand how solar installations transform not just energy bills, but the entire financial outlook of a home.</p>
      
      <h3>The Numbers That Change Everything</h3>
      <p>The research is conclusive and compelling: according to Zillow's comprehensive analysis, homes with solar-energy systems sold for an average of <strong>4.1% more</strong> than comparable homes without solar power. For the median-valued home in Washington DC, that translates to an additional $24,000 in value—often <em>exceeding the net cost of the system itself</em>.</p>
      
      <p>Even more impressive is research from the National Renewable Energy Laboratory (NREL) finding that each $1 in electricity bill savings from solar adds $20 to your home's total value. For a Sunfinity system saving $150 monthly ($1,800 annually), that's a potential <strong>$36,000 increase in property value</strong>—an ROI that traditional home improvements simply cannot match.</p>
      
      <h3>Why Today's Buyers Will Pay Premium Prices for Solar Homes</h3>
      <p>Working with real estate professionals across the DC, Maryland, and Virginia areas, we've identified several reasons why solar-powered homes command premium prices:</p>
      <ul>
        <li><strong>Immediate financial benefit</strong> - New owners enjoy dramatically reduced or eliminated electricity bills from day one</li>
        <li><strong>Inflation protection</strong> - As utility rates continue their historical 3-5% annual increases, the value of energy independence grows exponentially</li>
        <li><strong>Proven reliability</strong> - Modern solar systems have demonstrated decades of reliable performance, eliminating buyer concerns about experimental technology</li>
        <li><strong>Environmental leadership</strong> - Today's homebuyers increasingly prioritize sustainable features, with 73% of millennials willing to pay more for eco-friendly homes</li>
        <li><strong>Luxury home perception</strong> - Solar is increasingly viewed alongside premium home features like marble countertops and smart home technology—a mark of a quality property</li>
      </ul>
      
      <p>Unlike kitchen renovations that become dated or landscaping that requires ongoing maintenance, solar is the rare home improvement that actually <em>increases</em> in value over time as electricity costs rise.</p>
      
      <h3>How Sunfinity Maximizes Your Solar Home Value</h3>
      <p>Not all solar installations are created equal when it comes to home value appreciation. Here's how we ensure your investment delivers maximum return:</p>
      <ul>
        <li>We install only <strong>premium, aesthetically pleasing panels</strong> with sleek black designs that complement your home's appearance</li>
        <li>Our <strong>expert engineering</strong> ensures optimal system sizing—large enough to deliver significant savings but appropriately scaled for your home</li>
        <li>We provide <strong>comprehensive documentation</strong> of your system's performance and savings history—essential information for future home buyers</li>
        <li>All installations include <strong>transferable warranties</strong> that add security and value for future owners</li>
        <li>Our <strong>monitoring systems</strong> demonstrate real-time and historical production data, a powerful selling feature for energy-conscious buyers</li>
      </ul>
      
      <p>Recently, a Sunfinity customer in McLean, VA sold their home just 18 months after installation. Their 12kW system, which cost $29,500 (net of tax credits), helped the property sell for $48,000 more than similar homes in the neighborhood—a 162% return on their solar investment in less than two years.</p>
      
      <h3>Solar: The Home Improvement That Pays For Itself</h3>
      <p>When you consider that solar reduces or eliminates electricity bills for decades, provides substantial tax benefits, <em>and</em> increases your home's value, it becomes clear why more homeowners are choosing Sunfinity solar systems as their most strategic home investment.</p>
      
      <p>Want to learn exactly how much value a premium solar system could add to your specific home? <a href="/#quote-form">Contact us</a> for a free property assessment and custom value-add analysis tailored to your unique property and local real estate market.</p>
    `,
    image: "https://images.unsplash.com/photo-1592833167665-45659da16909?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: getRandomDate(),
    author: "Michael Coleman",
    authorTitle: "Real Estate Analyst",
    categories: ["Home Improvement", "Cost Savings"],
    featured: false
  },
  {
    id: 3,
    title: "Solar + Battery Storage: The Perfect Pairing",
    excerpt: "Battery storage systems are transforming how homeowners use solar energy. Discover how pairing solar panels with a home battery can maximize your investment.",
    content: `
      <p>The solar revolution has entered an exciting new phase, and at Sunfinity, we're seeing unprecedented demand for combined solar and battery systems. This powerful pairing doesn't just represent an improvement over traditional solar—it's a complete transformation of how homeowners produce, consume, and think about energy.</p>
      
      <h3>Beyond Solar: The Battery Difference</h3>
      <p>While solar panels have been helping our customers slash electric bills for years, adding battery storage creates an entirely new dimension of benefits that standalone solar simply cannot provide:</p>
      
      <h4>1. True Energy Independence</h4>
      <p>Our customers with battery storage consistently report a profound sense of liberation. Instead of sending valuable excess daytime energy back to the grid (often at discounted rates), your self-generated electricity is stored for <em>your</em> use when <em>you</em> need it. During a recent power outage in Northern Virginia, Sunfinity customers with battery systems maintained normal household operations while their neighborhoods went dark—running refrigerators, medical equipment, home offices, and even air conditioning through a 14-hour utility failure.</p>
      
      <h4>2. Blackout Protection When It Matters Most</h4>
      <p>Standard grid-tied solar systems are designed to shut down during power outages for safety reasons. Our clients with battery backup, however, enjoy continuous power during increasingly frequent weather-related outages. One Sunfinity customer in Maryland maintained essential home functions for almost three days during an ice storm outage last winter—keeping their family safe and comfortable while neighbors scrambled for hotel accommodations.</p>
      
      <h4>3. Financial Optimization That Multiplies Savings</h4>
      <p>Battery storage transforms the economics of solar in regions with time-of-use rates or limited net metering. By strategically using stored energy during expensive peak rate periods (typically evenings), Sunfinity customers with batteries in areas with time-of-use billing are saving an additional $60-120 monthly beyond what solar alone would provide. Your battery essentially becomes an automated arbitrage system, storing energy when it's cheap and displacing utility power when it's expensive.</p>
      
      <h3>The Sunfinity Battery Advantage</h3>
      <p>We partner with industry-leading manufacturers to offer several premium battery options, each carefully selected for reliability, performance, and value:</p>
      <ul>
        <li><strong>Tesla Powerwall</strong> - 13.5 kWh capacity with sophisticated AI-powered energy management and the sleek aesthetic Tesla is known for</li>
        <li><strong>Enphase Encharge</strong> - Modular system with exceptional reliability through distributed architecture—add capacity as your needs grow</li>
        <li><strong>LG Chem RESU</strong> - Compact design with impressive energy density, perfect for homes with limited installation space</li>
        <li><strong>Generac PWRcell</strong> - Expandable capacity from 9 kWh to 36 kWh, ideal for whole-home backup applications</li>
      </ul>
      
      <p>Unlike some solar providers who offer limited options, Sunfinity's product-agnostic approach means we recommend the specific battery solution that best addresses <em>your</em> unique needs and priorities—whether that's maximum backup capacity, optimum economic return, or the smallest physical footprint.</p>
      
      <h3>Real Customer Experiences</h3>
      <p>The Jacksons in Bethesda installed a Sunfinity solar + Tesla Powerwall system last year. Beyond eliminating their $240 monthly electric bill, they've maintained power through three neighborhood outages. "The investment has already paid for itself in peace of mind alone," says David Jackson. "During the last outage, our neighbors actually came over to charge their phones and store medication in our refrigerator."</p>
      
      <h3>Is Battery Storage Right for Your Home?</h3>
      <p>While not every solar installation requires battery backup, certain situations make batteries particularly valuable:</p>
      <ul>
        <li>You live in an area with frequent or prolonged power outages</li>
        <li>Your utility has implemented time-of-use rates with expensive evening electricity</li>
        <li>You have critical electricity needs that cannot tolerate interruption (medical equipment, home office, etc.)</li>
        <li>Your local utility offers limited or unfavorable net metering terms</li>
        <li>You value energy independence and resilience against grid disruptions</li>
      </ul>
      
      <p>The financial case for batteries continues to strengthen with the federal tax credit now covering 30% of battery costs (even when added to existing solar systems), plus additional incentives available in many states.</p>
      
      <p>Ready to explore how solar + storage could transform your energy future? <a href="/#quote-form">Contact Sunfinity's energy experts</a> for a personalized assessment and recommendation tailored to your unique home, energy usage patterns, and priorities.</p>
    `,
    image: "https://images.unsplash.com/photo-1564281857959-3e7294ec0f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: getRandomDate(),
    author: "David Chen",
    authorTitle: "Energy Storage Specialist",
    categories: ["Energy Storage", "Solar Technology"],
    featured: true
  },
  {
    id: 4,
    title: "The Environmental Impact of Going Solar: Beyond CO₂ Reduction",
    excerpt: "Solar energy does more than reduce carbon emissions. Explore the full environmental benefits of powering your home with the sun.",
    content: `
      <p>When most homeowners consider solar energy, they rightfully focus on the financial benefits and energy independence it provides. Yet at Sunfinity, we consistently hear from our customers about the profound satisfaction they feel in making a meaningful environmental impact. The environmental benefits of your solar decision extend far beyond just reducing carbon emissions—they represent a comprehensive shift toward true sustainability.</p>
      
      <h3>Water: The Hidden Environmental Benefit</h3>
      <p>Perhaps the least appreciated yet most significant environmental advantage of your potential solar system is water conservation. Traditional electricity generation is extraordinarily water-intensive—a typical coal or nuclear plant consumes 600 gallons of water per megawatt-hour produced.</p>
      
      <p>In contrast, the Sunfinity systems we install require virtually no water to generate clean electricity. Based on our calculations, a typical 8kW residential solar installation saves approximately <strong>35,000 gallons of water annually</strong> compared to grid electricity—equivalent to <em>eliminating 700 ten-minute showers every year</em>. In water-stressed regions, this benefit cannot be overstated.</p>
      
      <h3>Cleaner Air in Your Community</h3>
      <p>While carbon dioxide reduction gets the most attention, the fossil fuel plants displaced by your solar production release numerous toxins that directly impact local air quality and public health:</p>
      <ul>
        <li><strong>Nitrogen oxides (NOx)</strong> - These pollutants contribute to smog formation and trigger respiratory problems like asthma, which affects 1 in 12 children in our service areas</li>
        <li><strong>Sulfur dioxide (SO2)</strong> - Causes acid rain that damages forests, crops, and historical buildings while exacerbating respiratory conditions</li>
        <li><strong>Particulate matter</strong> - These microscopic particles penetrate deep into lung tissue, with studies linking them to increased heart attacks, strokes, and respiratory disease</li>
        <li><strong>Mercury and heavy metals</strong> - Bioaccumulative toxins that contaminate local watersheds and eventually concentrate in fish and wildlife</li>
      </ul>
      
      <p>A Sunfinity-installed solar system prevents approximately 12 pounds of nitrogen oxides and 20 pounds of sulfur dioxide emissions annually for every kilowatt installed—pollutants that would otherwise directly affect your local community's air quality. Unlike distant wind farms or large solar arrays, <em>your</em> rooftop system directly improves the air in <em>your</em> neighborhood.</p>
      
      <h3>Land Preservation Through Distributed Generation</h3>
      <p>When you choose a Sunfinity rooftop solar system, you're utilizing space that's already been developed rather than requiring new land dedication. This "distributed generation" approach—with energy produced right where it's needed—represents the most efficient and lowest-impact form of electricity generation.</p>
      
      <p>Consider that producing the same amount of electricity from coal requires disturbing approximately 5.5 square feet of land annually through mining and infrastructure for every megawatt-hour generated. A 10kW Sunfinity system produces about 14 MWh annually, preserving about 77 square feet of natural habitat each year compared to coal-generated electricity.</p>
      
      <h3>Grid Efficiency and Reduced Energy Waste</h3>
      <p>Few homeowners realize that approximately 5-6% of all electricity is lost during transmission from power plants to end users—energy that's simply wasted as heat. By generating electricity on your own roof, you eliminate these transmission losses entirely. For a typical Sunfinity customer, this means preventing the waste of approximately 600-800 kWh of energy generation annually—energy that would otherwise need to be produced by burning additional fossil fuels.</p>
      
      <h3>Your Personal Environmental Impact</h3>
      <p>Sunfinity customers consistently tell us about the personal satisfaction of watching their environmental impact grow in real-time through our monitoring systems. One family in McLean recently celebrated passing 50,000 kWh of lifetime solar production—equivalent to:</p>
      <ul>
        <li>Preventing 35.5 tons of carbon dioxide emissions</li>
        <li>The carbon sequestration power of 588 mature trees</li>
        <li>Avoiding the burning of 3,865 gallons of gasoline</li>
        <li>Conserving approximately 175,000 gallons of water</li>
      </ul>
      
      <p>What makes solar environmental benefits so powerful is their compounding nature. Every day, your system continues delivering these impacts, building a legacy of environmental stewardship that grows year after year, decade after decade.</p>
      
      <p>Ready to make a meaningful environmental impact while securing your energy future? Our <a href="/solar-calculator">Solar Calculator</a> provides personalized environmental impact projections based on your location, energy usage, and roof characteristics. Discover exactly how your home could become a force for environmental good.</p>
    `,
    image: "https://images.unsplash.com/photo-1611365892117-bce8d35092d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: getRandomDate(),
    author: "Sophia Lee",
    authorTitle: "Environmental Scientist",
    categories: ["Sustainability", "Solar Technology"],
    featured: false
  },
  {
    id: 5,
    title: "Solar Panel Efficiency: What the Numbers Really Mean",
    excerpt: "Solar panel efficiency ratings can be confusing. We break down what efficiency percentages actually mean for your energy production and savings.",
    content: `
      <p>In our conversations with homeowners considering solar, panel efficiency emerges as one of the most misunderstood yet important aspects of system design. At Sunfinity, we believe informed customers make the best decisions, so let's demystify efficiency and explore what it really means for your investment.</p>
      
      <h3>Understanding Efficiency: Quality vs. Quantity</h3>
      <p>Solar panel efficiency—typically ranging from 18% to 23% in today's premium panels—measures how effectively a panel converts available sunlight into usable electricity. A 20% efficient panel converts one-fifth of the sun's energy striking it into electricity. While these percentages might initially seem low, remember that the sun delivers an extraordinary amount of energy—more strikes the Earth in one hour than humanity uses annually.</p>
      
      <p>What makes efficiency so important is its direct impact on space utilization and system performance. Higher-efficiency panels produce more power per square foot, which often translates to either fewer panels needed or more total production from your available roof space.</p>
      
      <h3>The Sunfinity Approach to Efficiency</h3>
      <p>Unlike solar providers who push a single panel brand or efficiency level regardless of customer needs, our engineering team takes a consultative approach. We carefully evaluate your specific situation to determine where on the efficiency spectrum your ideal solution lies.</p>
      
      <h4>When We Recommend High-Efficiency Premium Panels:</h4>
      <ul>
        <li><strong>Limited roof space</strong> - For homes with smaller suitable roof areas, we often recommend our 22%+ efficiency panels, allowing us to pack more production into constrained spaces. One Georgetown client with limited roof area was able to offset 95% of their electricity usage with high-efficiency panels despite having only 60% of the typical installation area</li>
        <li><strong>Partially shaded locations</strong> - Higher-efficiency panels typically incorporate advanced technologies that perform better in less-than-ideal conditions. Our installations in wooded Bethesda neighborhoods often utilize premium panels specifically for their superior shade tolerance</li>
        <li><strong>Design-conscious homeowners</strong> - Premium high-efficiency panels tend to have the most aesthetic appeal with sleek, all-black designs. For homes in McLean and Great Falls, where appearance is paramount, these panels complement architectural aesthetics</li>
        <li><strong>Maximum production priority</strong> - When clients prioritize generating the absolute maximum electricity (often for electric vehicle charging or future-proofing), efficiency becomes the primary consideration</li>
      </ul>
      
      <h4>When Standard-Efficiency Panels May Be More Appropriate:</h4>
      <ul>
        <li><strong>Abundant roof space</strong> - For homes with plenty of suitable installation area, standard panels often provide better financial returns while still meeting production goals</li>
        <li><strong>Budget-conscious projects</strong> - When upfront cost is a primary concern, good-quality standard-efficiency panels (18-20%) offer excellent performance at more accessible price points</li>
        <li><strong>Optimal roof orientation</strong> - Homes with ideal south-facing roof planes can achieve excellent production even with standard efficiency panels</li>
      </ul>
      
      <h3>The Technology Behind Today's Efficiency</h3>
      <p>The remarkable evolution of panel efficiency continues to transform the solar landscape. When Sunfinity first began installing systems, premium panels averaged around 15% efficiency. Today's standard panels achieve 19-20%, while our premium offerings reach 22-23%—a transformation that allows today's systems to generate 30-40% more energy in the same space compared to systems from just a decade ago.</p>
      
      <p>Our engineering team remains at the forefront of efficiency developments, with exclusive access to next-generation panels often months before they're widely available. For our customers, this means access to the latest technological advances without the pitfalls of unproven technologies.</p>
      
      <h3>Beyond Simple Efficiency Numbers</h3>
      <p>While efficiency percentages provide a useful benchmark, our holistic approach considers several critical factors that impact real-world performance:</p>
      <ul>
        <li><strong>Temperature coefficient</strong> - How well panels maintain efficiency as temperatures rise (critical in our hot Washington DC summers)</li>
        <li><strong>Low-light performance</strong> - Productivity during cloudy conditions and early/late day periods</li>
        <li><strong>Degradation rate</strong> - How quickly panels lose efficiency over time (premium panels typically degrade more slowly)</li>
        <li><strong>Warranty terms</strong> - Most importantly, how production is guaranteed over the system's lifespan</li>
      </ul>
      
      <p>A recent Fairfax installation perfectly illustrates our approach. The homeowner initially requested the highest-efficiency panels available but had abundant south-facing roof space. Our analysis showed that a slightly larger array of standard-efficiency panels would produce 8% more total energy while costing 12% less—delivering significantly better long-term value despite lower efficiency ratings.</p>
      
      <h3>Making the Right Efficiency Choice for Your Home</h3>
      <p>Determining the ideal efficiency level for your specific situation requires a customized approach that considers your roof characteristics, energy goals, aesthetic preferences, and budget priorities. There's no one-size-fits-all answer, which is precisely why Sunfinity's engineering team provides detailed modeling of different panel options for your specific property.</p>
      
      <p>Ready to explore the perfect panel efficiency for your home's unique characteristics? <a href="/#quote-form">Contact us</a> for a free solar assessment and personalized recommendation from our expert engineering team.</p>
    `,
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: getRandomDate(),
    author: "Robert Johnson",
    authorTitle: "Solar Technology Expert",
    categories: ["Solar Technology", "Home Improvement"],
    featured: false
  },
  {
    id: 6,
    title: "Solar Panel Maintenance: What Every Homeowner Should Know",
    excerpt: "Concerned about maintaining your solar panels? Learn the simple truth about solar panel maintenance and how to maximize your system's lifespan.",
    content: `
      <p>One of the most common concerns we hear from prospective Sunfinity customers is about maintenance requirements. Many homeowners worry they'll need to invest significant time and effort keeping their solar system operating optimally. The good news? Solar is fundamentally different from almost every other home improvement in that it requires remarkably <em>little</em> maintenance while providing decades of reliable performance.</p>
      
      <h3>The Engineering Behind Maintenance-Free Solar</h3>
      <p>When Sunfinity designs your solar system, we leverage fundamental engineering principles that minimize maintenance needs from the start:</p>
      <ul>
        <li><strong>No moving parts</strong> in the panels themselves means minimal mechanical wear</li>
        <li><strong>Premium materials</strong> selected specifically for decades of weather exposure</li>
        <li><strong>Industrial-grade connections</strong> designed for hurricane-force winds and extreme temperature variations</li>
        <li><strong>Protective glass surfaces</strong> engineered to resist impact and optimize self-cleaning from rainfall</li>
      </ul>
      
      <p>This engineering excellence explains why premium solar panels typically come with 25-year warranties—a confidence in longevity that few home products can match. Our oldest installations, now approaching 15 years, continue to perform at over 90% of their original capacity with virtually no maintenance interventions.</p>
      
      <h3>Sunfinity's Approach to Effortless Maintenance</h3>
      <p>While solar systems require minimal maintenance, our approach further simplifies ownership through:</p>
      
      <h4>1. Intelligent Monitoring</h4>
      <p>Every Sunfinity installation includes sophisticated monitoring technology that continually tracks performance. This proactive approach means that in the rare event of a performance issue, our team often identifies and resolves it before you'd ever notice a change in production. Our monitoring systems track individual panel performance, enabling pinpoint diagnostics without even visiting your home.</p>
      
      <p>The Petersons in Silver Spring recently received a call from our monitoring team who had detected a 7% performance drop in one section of their array. Our technician identified and replaced a failing optimizer the next day—all before the homeowners had noticed any change in their system performance. This proactive approach prevents minor issues from becoming significant problems.</p>
      
      <h4>2. Rain-Washing Optimization</h4>
      <p>All Sunfinity installations are engineered with sufficient tilt to allow natural rainfall to effectively clear dust and light debris—what we call "rain-washing." Our installation team carefully considers local environmental factors like pollen, nearby trees, and seasonal bird migration patterns when determining optimal panel placement and tilt angles.</p>
      
      <p>In most of our DC, Maryland, and Virginia installations, natural rainfall provides adequate cleaning 8-10 months of the year. Only in unusual circumstances like extended droughts or unusual pollution events would manual cleaning be beneficial.</p>
      
      <h4>3. Professional Inspection Options</h4>
      <p>While not required, some homeowners appreciate the peace of mind that comes with periodic professional inspections. Sunfinity offers several maintenance plan options:</p>
      <ul>
        <li><strong>Essential Monitoring</strong> - Included with all systems; provides 24/7 performance tracking with automated alerts</li>
        <li><strong>Enhanced Care</strong> - Annual remote system diagnostic review with detailed performance report</li>
        <li><strong>Premium Maintenance</strong> - Biennial on-site inspection including cleaning, connection testing, and infrared scanning to detect any potential issues before they impact performance</li>
      </ul>
      
      <h3>The Inverter Consideration</h3>
      <p>The inverter—the component that converts DC power from your panels to usable AC electricity—typically has a different lifespan than the panels themselves:</p>
      <ul>
        <li><strong>String inverters</strong> typically last 12-15 years and may require a single replacement during your system's lifetime</li>
        <li><strong>Microinverters</strong>, which Sunfinity often recommends for their reliability advantages, typically carry 25-year warranties matching your panels</li>
      </ul>
      
      <p>We discuss inverter options thoroughly during system design, helping you balance initial cost against long-term maintenance considerations. Many Sunfinity customers opt for premium microinverters specifically to minimize maintenance touch points over their system's lifetime.</p>
      
      <h3>Real-World Maintenance Experience</h3>
      <p>The Jackson family in McLean has had their 10kW Sunfinity system for over seven years. In their words: "It's the only home improvement we've ever made that actually became <em>less</em> work over time. We haven't done a thing to maintain it, yet every month it quietly delivers hundreds of dollars in electricity savings. Compare that to our kitchen renovation that started showing wear after just three years!"</p>
      
      <p>Another Sunfinity customer in Great Falls recently told us: "I spent more time maintaining my lawn in one weekend than I've spent maintaining my solar panels in five years. They just work, silently and reliably, day after day."</p>
      
      <h3>The Low-Maintenance Solar Lifestyle</h3>
      <p>Perhaps the most valuable aspect of solar's minimal maintenance requirements is the peace of mind it provides. Unlike other home systems that demand regular attention, your solar array silently generates clean electricity and savings without disrupting your life—no regular service appointments, no weekend maintenance rituals, just quiet performance for decades.</p>
      
      <p>Ready to enjoy the benefits of a virtually maintenance-free energy system? <a href="/#quote-form">Contact Sunfinity</a> to learn more about our high-quality installations and industry-leading monitoring and support services.</p>
    `,
    image: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: getRandomDate(),
    author: "Aarav Patel",
    authorTitle: "Service Manager",
    categories: ["Home Improvement", "Solar Technology"],
    featured: false
  }
];

export const BlogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openArticleId, setOpenArticleId] = useState<number | null>(null);
  
  // Get the currently opened article
  const openArticle = blogPosts.find(post => post.id === openArticleId);
  
  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = !selectedCategory || 
      post.categories.includes(selectedCategory);
      
    return matchesSearch && matchesCategory;
  });
  
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Function to open article dialog
  const handleReadArticle = (articleId: number) => {
    setOpenArticleId(articleId);
  };
  
  // Function to close article dialog
  const handleCloseArticle = () => {
    setOpenArticleId(null);
  };
  
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-sunfinity-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Sunfinity Solar Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the latest insights, trends, and tips about solar energy, sustainability, and smart home technology
            </p>
          </div>
          
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card key={post.id} className="overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {/* Only show Featured badge for the first 2 articles */}
                      {index < 2 && (
                        <div className="mb-4">
                          <div className="inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200">
                            <p className="text-sunfinity-800 text-sm font-medium">Featured</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map(cat => (
                          <Badge 
                            key={cat} 
                            variant="outline" 
                            className="border-sunfinity-200 text-sunfinity-700 bg-sunfinity-50 hover:bg-sunfinity-100"
                            onClick={() => setSelectedCategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        variant="link" 
                        className="text-sunfinity-500 hover:text-sunfinity-600 p-0 h-auto font-medium"
                        onClick={() => handleReadArticle(post.id)}
                      >
                        Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Search */}
                <Card className="border border-border/40 shadow-sm overflow-hidden">
                  <CardContent className="p-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search articles..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                {/* Categories */}
                <Card className="border border-border/40 shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="py-4 px-4 bg-sunfinity-50 border-b border-border/40">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Tag className="h-4 w-4 text-sunfinity-500" />
                        Categories
                      </h3>
                    </div>
                    <div className="divide-y divide-border/40">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={cn(
                          "w-full text-left py-3 px-4 transition-colors flex items-center gap-2",
                          !selectedCategory ? "bg-sunfinity-50 text-sunfinity-700 font-medium" : "hover:bg-muted"
                        )}
                      >
                        All Categories
                      </button>
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={cn(
                            "w-full text-left py-3 px-4 transition-colors flex items-center gap-3",
                            selectedCategory === category.name
                              ? "bg-sunfinity-50 text-sunfinity-700 font-medium"
                              : "hover:bg-muted"
                          )}
                        >
                          <span className={cn(
                            "flex-shrink-0",
                            selectedCategory === category.name ? "text-sunfinity-500" : "text-muted-foreground"
                          )}>
                            {category.icon}
                          </span>
                          <span>{category.name}</span>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* CTA */}
                <Card className="border-0 shadow-md overflow-hidden bg-gradient-to-br from-sunfinity-500 to-sunfinity-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">Ready to Go Solar?</h3>
                    <p className="mb-4">Discover how much you could save with solar energy today.</p>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-white text-sunfinity-600 hover:bg-sunfinity-50" 
                        onClick={() => window.location.href = "/solar-calculator"}
                      >
                        Calculate Savings
                      </Button>
                      <Button 
                        variant="default" 
                        className="w-full bg-white/20 border border-white text-white hover:bg-white hover:text-sunfinity-600"
                        onClick={() => window.location.href = "/#quote-form"}
                      >
                        Get Free Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              {/* Filter information */}
              {selectedCategory && (
                <div className="mb-6 flex items-center text-muted-foreground">
                  <span>Showing articles in category:</span>
                  <Badge 
                    className="ml-2 bg-sunfinity-50 text-sunfinity-700 hover:bg-sunfinity-100 border border-sunfinity-200"
                  >
                    {selectedCategory}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-2 h-7 px-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Clear
                  </Button>
                </div>
              )}
              
              {/* Blog list */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-border rounded-lg">
                  <p className="text-muted-foreground">No articles found matching your criteria.</p>
                  <Button 
                    variant="link" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        {post.featured && (
                          <div className="mb-4">
                            <div className="inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200">
                              <p className="text-sunfinity-800 text-sm font-medium">Featured</p>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDate(post.date)}</span>
                          <Separator orientation="vertical" className="h-3 mx-1" />
                          <User className="h-3.5 w-3.5" />
                          <span>{post.author}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.categories.map(cat => (
                            <Badge 
                              key={cat} 
                              variant="outline" 
                              className="border-sunfinity-200 text-sunfinity-700 bg-sunfinity-50 hover:bg-sunfinity-100"
                              onClick={() => setSelectedCategory(cat)}
                            >
                              {cat}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="link" 
                          className="text-sunfinity-500 hover:text-sunfinity-600 p-0 h-auto font-medium"
                          onClick={() => handleReadArticle(post.id)}
                        >
                          Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              {/* Pagination (simplified) */}
              <div className="flex justify-center mt-10">
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" disabled className="h-9 w-9 p-0">1</Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0">2</Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0">3</Button>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Article Dialog */}
      <Dialog open={openArticleId !== null} onOpenChange={handleCloseArticle}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              {openArticle?.title}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Calendar className="h-3.5 w-3.5" />
              <span>{openArticle && formatDate(openArticle.date)}</span>
              <Separator orientation="vertical" className="h-3 mx-1" />
              <User className="h-3.5 w-3.5" />
              <span>{openArticle?.author}</span>
              <span className="italic">({openArticle?.authorTitle})</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2 mb-6">
              {openArticle?.categories.map(cat => (
                <Badge 
                  key={cat}
                  variant="outline" 
                  className="border-sunfinity-200 text-sunfinity-700 bg-sunfinity-50"
                >
                  {cat}
                </Badge>
              ))}
            </div>
            
            <div className="prose prose-stone dark:prose-invert max-w-none mt-6 blog-content">
              <div dangerouslySetInnerHTML={{ __html: openArticle?.content || '' }} />
            </div>
            
            <div className="bg-muted/40 p-6 rounded-lg mt-10">
              <h4 className="font-semibold mb-3 text-lg">Ready to start saving with solar?</h4>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button 
                  size="sm"
                  onClick={() => {
                    handleCloseArticle();
                    window.location.href = "/solar-calculator";
                  }}
                >
                  Calculate Your Savings
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    handleCloseArticle();
                    window.location.href = "/#quote-form";
                  }}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}; 