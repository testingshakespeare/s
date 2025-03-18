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
import { Battery, User, Phone, Mail, MapPin, Calendar, Home } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ConsultationFormDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export function ConsultationFormDialog({ open, setOpen, trigger }: ConsultationFormDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    preferredDate: "",
    propertyType: "",
    currentElectricBill: "",
    message: "",
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
    console.log("Consultation request:", formData);
    
    // Show success toast
    toast.success("Your consultation request has been submitted! Our battery storage experts will contact you within 24 hours.", {
      duration: 5000,
    });
    
    // Reset form and close dialog
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      preferredDate: "",
      propertyType: "",
      currentElectricBill: "",
      message: "",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule Your Battery Consultation</DialogTitle>
          <DialogDescription>
            Complete this form to schedule a personalized consultation with one of our battery storage experts.
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
              <Label htmlFor="preferredDate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-sunfinity-500" />
                Preferred Contact Date
              </Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleInputChange}
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
            
            <div className="space-y-2">
              <Label htmlFor="currentElectricBill" className="flex items-center gap-2">
                <Battery className="h-4 w-4 text-sunfinity-500" />
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
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sunfinity-500" />
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
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                Additional Information
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your energy needs, backup power requirements, or any specific questions you have about battery storage..."
                className="min-h-[120px]"
              />
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              type="submit"
              className="w-full bg-sunfinity-500 hover:bg-sunfinity-600 text-white"
            >
              Submit Consultation Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 