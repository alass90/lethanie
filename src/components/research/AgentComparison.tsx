import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Search, Brain, ShieldCheck, Zap } from "lucide-react";

const AgentComparison = () => {
  // Placeholder data - will be updated with actual benchmark results
  const data = {
    baseline: { score: 100, errors: "0%", logic: "Linear" },
    consensus: { score: 100, errors: "0%", logic: "Simple Majority" },
    ara: { score: 100, errors: "100% Resilience", logic: "Dialectical Resonance" }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Baseline Card */}
        <Card className="border-border/50 bg-secondary/10 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-muted-foreground">Baseline</Badge>
              <Zap className="w-4 h-4 text-muted-foreground" />
            </div>
            <CardTitle className="text-xl">Standard LLM</CardTitle>
            <CardDescription>Direct single-inference response</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Success Rate (LARB)</span>
                <span className="font-mono">{data.baseline.score}%</span>
              </div>
              <Progress value={data.baseline.score} className="h-1 bg-muted" />
            </div>
            <div className="pt-2 text-xs text-muted-foreground">
              Vulnerable to cognitive bias (Substitution Bias, System 1 thinking).
            </div>
          </CardContent>
        </Card>

        {/* Consensus Card */}
        <Card className="border-border/50 bg-secondary/10 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Consensus</Badge>
              <Brain className="w-4 h-4 text-blue-500" />
            </div>
            <CardTitle className="text-xl">Multi-Agent Voting</CardTitle>
            <CardDescription>Majority vote from N agents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Success Rate (LARB)</span>
                <span className="font-mono text-blue-500">{data.consensus.score}%</span>
              </div>
              <Progress value={data.consensus.score} className="h-1 bg-muted" />
            </div>
            <div className="pt-2 text-xs text-muted-foreground">
              Reduces random error but often reinforces "popular" cognitive fallacies.
            </div>
          </CardContent>
        </Card>

        {/* ARA Card */}
        <Card className="relative overflow-hidden border-primary/50 bg-primary/5 shadow-lg shadow-primary/5">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className="bg-primary text-primary-foreground">ARA (Architecture 1.0)</Badge>
              <ShieldCheck className="w-4 h-4 text-primary" />
            </div>
            <CardTitle className="text-xl">Adversarial Resonance</CardTitle>
            <CardDescription>Dialectical logic validation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold text-primary">
                <span>Success Rate (LARB)</span>
                <span className="font-mono">{data.ara.score}%</span>
              </div>
              <Progress value={data.ara.score} className="h-2" />
            </div>
            <div className="pt-2 text-xs text-primary/80 font-medium">
              Eliminates the Communication-Reasoning Gap through systematic falsification.
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Architecture Analysis</CardTitle>
          <CardDescription>How ARA filters error through the dialectical loop</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="isolation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="isolation">Phase 1: Isolation</TabsTrigger>
              <TabsTrigger value="critique">Phase 2: Critique</TabsTrigger>
              <TabsTrigger value="resonance">Phase 3: Resonance</TabsTrigger>
            </TabsList>
            <TabsContent value="isolation" className="p-4 rounded-lg bg-muted/30 border border-border/50 text-sm leading-relaxed">
              <p className="font-medium mb-2 text-muted-foreground uppercase text-[10px] tracking-wider">Independent Hypothesis</p>
              Agents individually process the prompt. Baseline probability of error is high (CRG peak).
            </TabsContent>
            <TabsContent value="critique" className="p-4 rounded-lg bg-muted/30 border border-border/50 text-sm leading-relaxed text-red-400/90">
              <p className="font-medium mb-2 text-red-500 uppercase text-[10px] tracking-wider">Adversarial Falsification</p>
              An Opponent agent attempts to find logical inconsistencies, linguistic traps, or boundary condition violations.
            </TabsContent>
            <TabsContent value="resonance" className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm leading-relaxed text-primary">
              <p className="font-medium mb-2 text-primary uppercase text-[10px] tracking-wider">Final Synthesis</p>
              An Arbitrator evaluates the critique against the hypothesis. The resulting state is "Resonant" - logically verified.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentComparison;
