import { content } from "@/content/it";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { NeonTiltCard } from "@/components/ui/NeonTiltCard";
import { SectionPortal } from "@/components/ui/SectionPortal";

export function FAQ() {
  return (
    <SectionPortal id="faq" className="py-24 relative overflow-hidden">
       <FloatingShape type="circle" size={500} color="bg-secondary" className="top-0 -left-40 opacity-10 blur-[120px]" duration={25} />
       <FloatingShape type="ring" size={150} color="border-primary" className="bottom-20 right-10 opacity-10" duration={20} delay={1} />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 text-gradient-logo mx-auto">
              {content.faq.title}
            </h2>
          </Reveal>
        </div>

        <StaggerContainer>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {content.faq.items.map((item, index) => (
              <StaggerItem key={index}>
                <NeonTiltCard intensity={5}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border-none bg-transparent px-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-white hover:text-primary hover:no-underline text-left text-lg font-medium py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </NeonTiltCard>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>
      </div>
    </SectionPortal>
  );
}
