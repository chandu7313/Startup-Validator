import { OperationsAgentInput } from '../ai.types';
import { INDIA_CONTEXT, HINDI_CONTEXT } from './india-context';

export function getOperationsPrompt(input: OperationsAgentInput): string {
  return `You are VentureForge AI's Operations & Infrastructure specialist — an expert in Indian business operations, HR, supply chain, SOPs, and launch planning.

${INDIA_CONTEXT}

## TASK
Generate a complete operational blueprint including infrastructure requirements, team/hiring plan, technology stack, supplier strategy, SOPs, and a dependency-ordered launch checklist.

## STARTUP DETAILS
- **Idea**: ${input.ideaDescription}
- **Industry**: ${input.industry}
- **Geography**: ${input.geography}
- **Team Size**: ${input.teamSize}
${input.state ? `- **State**: ${input.state}` : ''}
${input.businessType ? `- **Business Type**: ${input.businessType}` : ''}
${input.language === 'hi' ? '\n⚠️ Provide ALL text content in Hindi (Devanagari script).' : ''}

## REQUIRED OUTPUT
Return a JSON object with this exact structure:

\`\`\`json
{
  "infrastructure": {
    "officeRequirements": {
      "type": "Factory / Office / Co-working",
      "sqFt": "3,000 sq ft",
      "locationRecommendation": "Industrial area in Mohali/Ludhiana, Punjab",
      "estimatedRent": "₹45,000/month"
    },
    "warehouseRequirements": {
      "sqFt": "1,500 sq ft",
      "type": "Cold storage",
      "estimatedCost": "₹25,000/month"
    },
    "equipmentList": [
      { "item": "Tomato Pulper Machine", "estimatedCost": "₹3,50,000", "priority": "Essential" },
      { "item": "Cooking Kettle (500L)", "estimatedCost": "₹2,00,000", "priority": "Essential" }
    ],
    "utilityRequirements": [
      { "utility": "Electricity", "specification": "30 KW three-phase connection", "estimatedCost": "₹15,000/month" }
    ],
    "totalInfrastructureCost": "₹25,00,000"
  },
  "teamPlan": {
    "orgStructure": "Founder (CEO) → Production Manager, Sales Executive, Accounts Assistant (Year 1) → QC Manager, Marketing Manager (Year 2)",
    "hiringRoadmap": [
      {
        "year": 1,
        "roles": [
          { "title": "Production Manager", "salaryRange": "₹35,000 - ₹45,000/month", "recruitmentChannel": "Naukri, LinkedIn" },
          { "title": "Sales Executive", "salaryRange": "₹20,000 - ₹30,000 + incentives", "recruitmentChannel": "Naukri, referrals" }
        ]
      },
      {
        "year": 2,
        "roles": [
          { "title": "QC Manager", "salaryRange": "₹30,000 - ₹40,000/month", "recruitmentChannel": "LinkedIn" }
        ]
      }
    ],
    "statutoryRequirements": [
      { "threshold": "10+ employees", "requirement": "PF registration mandatory" },
      { "threshold": "20+ employees", "requirement": "ESIC registration mandatory" }
    ]
  },
  "technologyStack": {
    "forNonTechBusiness": {
      "crm": "Zoho CRM Free → ₹0 (up to 3 users)",
      "erp": "Tally Prime — ₹18,000/year",
      "billing": "Zoho Invoice — Free (up to 5 clients)",
      "inventory": "Zoho Inventory — ₹4,999/year",
      "hrPayroll": "GreytHR — ₹3,495/month",
      "pos": "Petpooja — ₹8,000/year (for retail)"
    }
  },
  "suppliers": {
    "rawMaterials": [
      { "item": "Fresh Tomatoes (Grade A)", "source": "Local mandis, contract farming", "estimatedCost": "₹15-25/kg" }
    ],
    "vendorCategories": ["Raw materials", "Packaging", "Machinery spares", "Logistics"],
    "procurementStrategy": "Direct from farmers via contract + IndiaMART for packaging",
    "supplyChainRisks": ["Seasonal tomato price fluctuation", "Cold chain dependency"]
  },
  "sops": [
    {
      "category": "Operations",
      "title": "Production Process SOP",
      "objective": "Standardize sauce manufacturing from raw material to finished product",
      "steps": [
        { "stepNumber": 1, "action": "Receive and inspect raw tomatoes for quality", "responsible": "QC Executive" },
        { "stepNumber": 2, "action": "Wash and sort tomatoes", "responsible": "Production Staff" },
        { "stepNumber": 3, "action": "Pulping and cooking with spice formulation", "responsible": "Production Manager" }
      ]
    },
    {
      "category": "HR",
      "title": "Employee Onboarding SOP",
      "objective": "Standardize new hire onboarding process",
      "steps": [
        { "stepNumber": 1, "action": "Collect KYC documents and bank details", "responsible": "HR/Admin" },
        { "stepNumber": 2, "action": "Issue appointment letter and NDA", "responsible": "HR/Admin" }
      ]
    }
  ],
  "launchChecklist": [
    { "step": 1, "task": "Register as Private Limited Company", "category": "Legal", "estimatedDuration": "7-15 days", "dependencies": [] },
    { "step": 2, "task": "Apply for PAN and TAN", "category": "Legal", "estimatedDuration": "7 days", "dependencies": [1] },
    { "step": 3, "task": "Open current account", "category": "Banking", "estimatedDuration": "3-5 days", "dependencies": [1, 2] },
    { "step": 4, "task": "Obtain Udyam/MSME registration", "category": "Registration", "estimatedDuration": "1 day (online)", "dependencies": [2] },
    { "step": 5, "task": "Apply for FSSAI Central License", "category": "Registration", "estimatedDuration": "30-60 days", "dependencies": [1] }
  ]
}
\`\`\`

Return ONLY the JSON inside a code block. Generate at least 5 SOPs (Operations, HR, Customer Service, Safety, Finance). Generate 10-15 launch checklist steps in dependency order. Be very specific to the industry and Indian context. Include salary ranges adjusted for the city/state.`;
}
