import React from 'react';
import AgentComparison from '@/components/research/AgentComparison';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Research = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <Badge variant="outline" className="px-4 py-1 text-xs uppercase tracking-widest border-primary/50 text-primary animate-pulse">
            R&D Pipeline / Live Validation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Adversarial Resonance <span className="text-primary">Architecture</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Quantifying the reduction of the Communication-Reasoning Gap (CRG) in multi-agent lattices. 
            Validation through the Logical Adversarial Resonance Benchmark (LARB).
          </p>
        </div>

        <Separator className="bg-border/50" />

        {/* Comparison Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Benchmark Performance</h2>
            <div className="text-sm text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full border border-border/50">
              Target Model: Kimi K2.5 (Thinking)
            </div>
          </div>
          <AgentComparison />
        </section>

        {/* Scientific Context Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Le Communication-Reasoning Gap (CRG)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Le CRG est un phénomène où un agent IA est capable de formuler une logique correcte dans ses "pensées" internes mais échoue à produire une réponse finale cohérente avec cette logique. 
              Nos travaux sur l'ARA visent à forcer une résonance entre ces deux états via une dialectique structurée.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Méthodologie LARB</h3>
            <p className="text-muted-foreground leading-relaxed">
              Le benchmark LARB (Logical Adversarial Resonance Benchmark) soumet l'architecture à 10 pièges logiques, linguistiques et probabilistes spécifiquement conçus pour induire des erreurs intuitives. 
              L'architecture ARA doit non seulement trouver la réponse, mais aussi résister aux "critiques" fallacieuses d'un opposant.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;
