import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const serviceOptions = [
  "IT Consulting",
  "Cybersecurity",
  "Web & App Development",
  "Networking Solutions",
  "IT Training & Certifications",
  "IT Equipment Supply",
  "Other",
];

type QuoteFormDialogProps = {
  trigger: React.ReactNode;
  defaultService?: string;
};

export const QuoteFormDialog = ({ trigger, defaultService }: QuoteFormDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "IT Consulting",
    details: "",
  });

  React.useEffect(() => {
    if (defaultService) {
      setForm((current) => ({ ...current, service: defaultService }));
    }
  }, [defaultService]);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Quote request from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nDetails: ${form.details}`,
    );
    window.location.href = `mailto:info@kasitech.co.ke?subject=${subject}&body=${body}`;
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Share your details and the service you need. We’ll follow up via email as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="quote-name">Full Name</Label>
            <Input
              id="quote-name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Jane Doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="quote-email">Email Address</Label>
            <Input
              id="quote-email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="jane@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="quote-phone">Phone Number</Label>
            <Input
              id="quote-phone"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+254 712 345 678"
              required
            />
          </div>

          <div>
            <Label htmlFor="quote-service">Service Required</Label>
            <select
              id="quote-service"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={form.service}
              onChange={(event) => updateField("service", event.target.value)}
            >
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="quote-details">Tell us more</Label>
            <Textarea
              id="quote-details"
              value={form.details}
              onChange={(event) => updateField("details", event.target.value)}
              placeholder="Describe your project, timeline or specific needs."
              rows={4}
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full md:w-auto">
              Send request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
