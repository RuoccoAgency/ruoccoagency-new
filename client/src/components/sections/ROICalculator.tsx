import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Clock, AlertTriangle } from "lucide-react";

export function ROICalculator() {
    const [leadsPerMonth, setLeadsPerMonth] = useState([50]);
    const [missedLeadRate, setMissedLeadRate] = useState([30]);
    const [avgLeadValue, setAvgLeadValue] = useState([100]);

    const leads = leadsPerMonth[0];
    const missedRate = missedLeadRate[0] / 100;
    const value = avgLeadValue[0];

    const missedLeads = Math.round(leads * missedRate);
    const lostRevenue = missedLeads * value;
    const potentialSavings = Math.round(lostRevenue * 0.8); // 80% recovery with AI

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-display text-white mb-4 text-gradient-logo"
                        >
                            Quanto ti costa non automatizzare?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60 text-lg"
                        >
                            Calcola il potenziale di guadagno recuperato grazie ai nostri assistenti AI
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Inputs */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10 p-8 rounded-3xl glass-premium"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-white font-medium">
                                    <label>Contatti (Lead) al mese</label>
                                    <span className="text-primary text-xl font-bold">{leads}</span>
                                </div>
                                <Slider
                                    value={leadsPerMonth}
                                    onValueChange={setLeadsPerMonth}
                                    max={500}
                                    step={10}
                                    className="py-4"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-white font-medium">
                                    <label>% Contatti persi/non gestiti</label>
                                    <span className="text-secondary text-xl font-bold">{missedLeadRate[0]}%</span>
                                </div>
                                <Slider
                                    value={missedLeadRate}
                                    onValueChange={setMissedLeadRate}
                                    max={100}
                                    step={5}
                                    className="py-4"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-white font-medium">
                                    <label>Valore medio di un cliente (€)</label>
                                    <span className="text-accent text-xl font-bold">€{value}</span>
                                </div>
                                <Slider
                                    value={avgLeadValue}
                                    onValueChange={setAvgLeadValue}
                                    max={5000}
                                    step={50}
                                    className="py-4"
                                />
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 gap-6"
                        >
                            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <AlertTriangle className="h-16 w-16 text-destructive" />
                                </div>
                                <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-2">Entrate potenziali perse</p>
                                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">€{lostRevenue.toLocaleString()}</h4>
                                <p className="text-white/40 text-sm italic">Ogni anno il tuo business lascia sul tavolo questa cifra.</p>
                            </div>

                            <div className="p-8 rounded-3xl glass-premium bg-gradient-to-br from-primary/10 to-transparent border-primary/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <TrendingUp className="h-16 w-16 text-primary" />
                                </div>
                                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Recupero stimato con AI</p>
                                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">€{potentialSavings.toLocaleString()}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    L'automazione può recuperare fino all'80% dei contatti persi gestendoli istantaneamente.
                                </p>

                                <button
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    className="mt-8 w-full py-4 rounded-full bg-primary text-white font-bold hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2"
                                >
                                    <Calculator className="h-5 w-5" />
                                    Smetti di perdere clienti ora
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
