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
import { User, Phone, Mail, MapPin, Calendar, Clock, MessageSquare } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface FinancingConsultationDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger?: React.ReactNode;
}

export function FinancingConsultationDialog({ open, setOpen, trigger }: FinancingConsultationDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    consultationMethod: "phone",
    topics: {
      solarLoans: false,
      solarLeases: false,
      ppa: false,
      taxCredits: false,
      rebates: false,
      other: false
    },
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicChange = (topicName: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      topics: {
        ...prev.topics,
        [topicName]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Consultation request:", formData);
    
    // Show success toast
    toast.success("Your free consultation request has been submitted! Our solar financing experts will contact you to confirm your appointment.", {
      duration: 5000,
    });
    
    // Reset form and close dialog
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      consultationMethod: "phone",
      topics: {
        solarLoans: false,
        solarLeases: false,
        ppa: false,
        taxCredits: false,
        rebates: false,
        other: false
      },
      additionalInfo: "",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule Your Free Solar Financing Consultation</DialogTitle>
          <DialogDescription>
            Book a no-obligation consultation with one of our solar financing experts who will help you understand all your options.
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
              <Label htmlFor="consultationMethod" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-sunfinity-500" />
                Preferred Method
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange("consultationMethod", value)}
                value={formData.consultationMethod}
              >
                <SelectTrigger id="consultationMethod">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="video">Video Call</SelectItem>
                  <SelectItem value="in_person">In-Person Meeting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-sunfinity-500" />
                Preferred Date
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
              <Label htmlFor="preferredTime" className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-sunfinity-500" />
                Preferred Time
              </Label>
              <Select 
                onValueChange={(value) => handleSelectChange("preferredTime", value)}
                value={formData.preferredTime}
              >
                <SelectTrigger id="preferredTime">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                  <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2 space-y-3">
              <Label className="flex items-center gap-2">
                Topics You'd Like to Discuss
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="solarLoans" 
                    checked={formData.topics.solarLoans}
                    onCheckedChange={(checked) => handleTopicChange("solarLoans", checked as boolean)}
                  />
                  <Label htmlFor="solarLoans" className="cursor-pointer">Solar Loans</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="solarLeases" 
                    checked={formData.topics.solarLeases}
                    onCheckedChange={(checked) => handleTopicChange("solarLeases", checked as boolean)}
                  />
                  <Label htmlFor="solarLeases" className="cursor-pointer">Solar Leases</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="ppa" 
                    checked={formData.topics.ppa}
                    onCheckedChange={(checked) => handleTopicChange("ppa", checked as boolean)}
                  />
                  <Label htmlFor="ppa" className="cursor-pointer">Power Purchase Agreements</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="taxCredits" 
                    checked={formData.topics.taxCredits}
                    onCheckedChange={(checked) => handleTopicChange("taxCredits", checked as boolean)}
                  />
                  <Label htmlFor="taxCredits" className="cursor-pointer">Tax Credits & Incentives</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="rebates" 
                    checked={formData.topics.rebates}
                    onCheckedChange={(checked) => handleTopicChange("rebates", checked as boolean)}
                  />
                  <Label htmlFor="rebates" className="cursor-pointer">Utility Rebates</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="other" 
                    checked={formData.topics.other}
                    onCheckedChange={(checked) => handleTopicChange("other", checked as boolean)}
                  />
                  <Label htmlFor="other" className="cursor-pointer">Other Topics</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="additionalInfo" className="flex items-center gap-2">
                Additional Information
              </Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                placeholder="Tell us about your specific situation or any questions you have about solar financing..."
                className="min-h-[100px]"
              />
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              type="submit"
              className="w-full bg-sunfinity-500 hover:bg-sunfinity-600 text-white"
            >
              Schedule Consultation
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 