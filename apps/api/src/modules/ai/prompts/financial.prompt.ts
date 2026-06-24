import { FinancialAgentInput } from '../ai.types';
import { INDIA_CONTEXT, HINDI_CONTEXT } from './india-context';

export function getFinancialPrompt(input: FinancialAgentInput): string {
  return `You are VentureForge AI's Financial Intelligence specialist — a chartered accountant and financial modeler with deep expertise in Indian startup finance, MSME funding, and business projections.

${INDIA_CONTEXT}

## TASK
Generate comprehensive financial projections and capital planning for this startup idea. All amounts should be in Indian Rupees (₹).

## STARTUP DETAILS
- **Idea**: ${input.ideaDescription}
- **Industry**: ${input.industry}
- **Geography**: ${input.geography}
- **Budget**: ${input.budget}
- **Team Size**: ${input.teamSize}
${input.language === 'hi' ? '\n⚠️ Provide ALL text content in Hindi (Devanagari script).' : ''}

${input.marketData ? `## MARKET CONTEXT
- TAM: ₹${input.marketData.tam.inrCr} Cr (CAGR: ${input.marketData.tam.cagr}%)
- SAM: ₹${input.marketData.sam.inrCr} Cr
- SOM: ₹${input.marketData.som.inrCr} Cr` : ''}

## REQUIRED OUTPUT
Return a JSON object with this exact structure:

\`\`\`json
{
  "startupCapital": {
    "oneTimeSetupCosts": [
      { "item": "Company Registration & Legal", "amount": "₹25,000" },
      { "item": "Office Setup", "amount": "₹2,00,000" },
      { "item": "Equipment & Machinery", "amount": "₹15,00,000" }
    ],
    "totalSetupCost": "₹35,00,000"
  },
  "workingCapital": {
    "monthlyOperatingExpenses": [
      { "item": "Rent", "amount": "₹45,000" },
      { "item": "Salaries", "amount": "₹2,50,000" },
      { "item": "Raw Materials", "amount": "₹3,00,000" }
    ],
    "threeMonthRequirement": "₹18,00,000",
    "monthlyBurnRate": "₹6,00,000"
  },
  "revenueProjections": {
    "conservative": { "year1": "₹15,00,000", "year2": "₹45,00,000", "year3": "₹1,20,00,000" },
    "realistic": { "year1": "₹25,00,000", "year2": "₹80,00,000", "year3": "₹2,10,00,000" },
    "optimistic": { "year1": "₹40,00,000", "year2": "₹1,30,00,000", "year3": "₹3,50,00,000" }
  },
  "monthlyPnL": [
    { "month": "Month 1", "revenue": "₹0", "expenses": "₹6,00,000", "profit": "-₹6,00,000" },
    { "month": "Month 6", "revenue": "₹3,50,000", "expenses": "₹5,50,000", "profit": "-₹2,00,000" },
    { "month": "Month 12", "revenue": "₹8,00,000", "expenses": "₹6,00,000", "profit": "₹2,00,000" }
  ],
  "cashFlowProjection": [
    { "month": "Month 1", "inflow": "₹35,00,000", "outflow": "₹28,00,000", "netCash": "₹7,00,000" }
  ],
  "unitEconomics": {
    "cac": "₹500",
    "ltv": "₹3,500",
    "ltvCacRatio": "7:1",
    "explanation": "Healthy ratio above 3:1 threshold..."
  },
  "breakEvenAnalysis": {
    "timelineMonths": 14,
    "revenueMilestone": "₹6,50,000/month",
    "explanation": "Break-even occurs when monthly revenue covers..."
  },
  "fundingOptions": [
    { "option": "Bootstrapping", "suitability": "High", "amount": "₹5-10L personal savings", "details": "..." },
    { "option": "PMEGP Loan", "suitability": "High", "amount": "Up to ₹50L", "details": "35% subsidy for manufacturing..." },
    { "option": "Mudra Loan (Shishu/Kishore/Tarun)", "suitability": "High", "amount": "₹50,000 - ₹10L", "details": "..." },
    { "option": "Startup India Seed Fund", "suitability": "Medium", "amount": "Up to ₹50L", "details": "..." },
    { "option": "Angel Investment", "suitability": "Medium", "amount": "₹25L - ₹2Cr", "details": "..." },
    { "option": "Bank Term Loan", "suitability": "Medium", "amount": "Based on project cost", "details": "..." }
  ],
  "pitchReadiness": [
    "Financial model with 3-year projections",
    "Unit economics documentation",
    "Cap table structure",
    "Use of funds breakdown"
  ]
}
\`\`\`

Return ONLY the JSON inside a code block. All amounts must be in INR (₹). Be realistic with projections based on the industry and Indian market conditions. Include India-specific funding schemes (PMEGP, Mudra, SIDBI, Startup India).`;
}
