export interface SnpRecord {
  id: string;
  gene: string;
  chromosome: string;
  population: string;
  disease: string;
  frequency: number;
}

export const mockSnps: SnpRecord[] = [
  // --- Chromosome 1–5 ---
  { id: "rs101", gene: "TNFRSF14", chromosome: "1", population: "EUR", disease: "Autoimmune disorders", frequency: 0.12 },
  { id: "rs102", gene: "CFH", chromosome: "1", population: "AFR", disease: "Macular degeneration", frequency: 0.22 },
  { id: "rs103", gene: "APOB", chromosome: "2", population: "AMR", disease: "Hypercholesterolemia", frequency: 0.31 },
  { id: "rs104", gene: "IL1B", chromosome: "2", population: "EAS", disease: "Inflammation disorders", frequency: 0.19 },
  { id: "rs105", gene: "MTHFR", chromosome: "3", population: "EUR", disease: "Cardiovascular disease", frequency: 0.27 },
  { id: "rs106", gene: "CCR5", chromosome: "3", population: "AFR", disease: "HIV resistance", frequency: 0.07 },
  { id: "rs107", gene: "SLC6A4", chromosome: "4", population: "EAS", disease: "Depression", frequency: 0.42 },
  { id: "rs108", gene: "HTT", chromosome: "4", population: "EUR", disease: "Huntington's disease", frequency: 0.05 },
  { id: "rs109", gene: "TERT", chromosome: "5", population: "SAS", disease: "Cancer risk", frequency: 0.14 },
  { id: "rs110", gene: "IL7R", chromosome: "5", population: "AMR", disease: "Multiple sclerosis", frequency: 0.18 },

  // --- Chromosome 6–10 ---
  { id: "rs201", gene: "HLA-A", chromosome: "6", population: "AFR", disease: "Immune disorders", frequency: 0.44 },
  { id: "rs202", gene: "HLA-B", chromosome: "6", population: "EUR", disease: "Autoimmune disorders", frequency: 0.33 },
  { id: "rs203", gene: "ESR1", chromosome: "6", population: "EAS", disease: "Breast cancer risk", frequency: 0.21 },
  { id: "rs204", gene: "FOXO3", chromosome: "6", population: "SAS", disease: "Longevity", frequency: 0.29 },
  { id: "rs205", gene: "GSTM1", chromosome: "7", population: "AMR", disease: "Detox pathway variations", frequency: 0.35 },
  { id: "rs206", gene: "CFTR", chromosome: "7", population: "EUR", disease: "Cystic fibrosis", frequency: 0.06 },
  { id: "rs207", gene: "IKZF1", chromosome: "7", population: "AFR", disease: "Leukemia", frequency: 0.25 },
  { id: "rs208", gene: "NOD1", chromosome: "7", population: "EAS", disease: "Inflammatory bowel disease", frequency: 0.14 },
  { id: "rs209", gene: "FGFR2", chromosome: "8", population: "EUR", disease: "Breast cancer", frequency: 0.18 },
  { id: "rs210", gene: "EXT1", chromosome: "8", population: "AFR", disease: "Bone growth disorders", frequency: 0.12 },
  { id: "rs211", gene: "CDKN2A", chromosome: "9", population: "EAS", disease: "Melanoma", frequency: 0.09 },
  { id: "rs212", gene: "ABL1", chromosome: "9", population: "SAS", disease: "Leukemia", frequency: 0.11 },
  { id: "rs213", gene: "PTCH1", chromosome: "9", population: "AMR", disease: "Skin cancer", frequency: 0.23 },
  { id: "rs214", gene: "CYP1A2", chromosome: "10", population: "EAS", disease: "Caffeine metabolism", frequency: 0.47 },
  { id: "rs215", gene: "RET", chromosome: "10", population: "EUR", disease: "Thyroid cancer", frequency: 0.15 },

  // --- Chromosome 11–15 ---
  { id: "rs301", gene: "HBB", chromosome: "11", population: "AFR", disease: "Sickle cell disease", frequency: 0.35 },
  { id: "rs302", gene: "INS", chromosome: "11", population: "SAS", disease: "Type 1 diabetes", frequency: 0.28 },
  { id: "rs303", gene: "APOA1", chromosome: "11", population: "AMR", disease: "Cholesterol disorders", frequency: 0.41 },
  { id: "rs304", gene: "KCNQ1", chromosome: "11", population: "EAS", disease: "Type 2 diabetes", frequency: 0.32 },
  { id: "rs305", gene: "BRCA1", chromosome: "17", population: "EUR", disease: "Breast cancer", frequency: 0.18 },
  { id: "rs306", gene: "TP53", chromosome: "17", population: "EAS", disease: "Cancer risk", frequency: 0.22 },
  { id: "rs307", gene: "ACE", chromosome: "17", population: "SAS", disease: "Heart disease", frequency: 0.14 },

  // --- Chromosome 16–20 ---
  { id: "rs401", gene: "NOD2", chromosome: "16", population: "EUR", disease: "Crohn's disease", frequency: 0.12 },
  { id: "rs402", gene: "CDH1", chromosome: "16", population: "AMR", disease: "Gastric cancer", frequency: 0.10 },
  { id: "rs403", gene: "GFER", chromosome: "16", population: "AFR", disease: "Liver disorders", frequency: 0.33 },
  { id: "rs404", gene: "MC1R", chromosome: "16", population: "EUR", disease: "Skin pigmentation", frequency: 0.49 },
  { id: "rs405", gene: "CYP2D6", chromosome: "19", population: "EAS", disease: "Drug metabolism", frequency: 0.36 },
  { id: "rs406", gene: "APOE", chromosome: "19", population: "AFR", disease: "Alzheimer's", frequency: 0.27 },
  { id: "rs407", gene: "LDLR", chromosome: "19", population: "AMR", disease: "Cholesterol", frequency: 0.39 },
  { id: "rs408", gene: "NOTCH3", chromosome: "19", population: "EUR", disease: "Stroke risk", frequency: 0.13 },

  // --- Chromosome 21–22, X, Y ---
  { id: "rs501", gene: "DYRK1A", chromosome: "21", population: "EAS", disease: "Neurodevelopmental disorders", frequency: 0.21 },
  { id: "rs502", gene: "RUNX1", chromosome: "21", population: "EUR", disease: "Leukemia", frequency: 0.11 },
  { id: "rs503", gene: "ETS2", chromosome: "21", population: "SAS", disease: "Immune disorders", frequency: 0.20 },
  { id: "rs504", gene: "C22orf39", chromosome: "22", population: "AFR", disease: "Neurological syndromes", frequency: 0.38 },
  { id: "rs505", gene: "MAPK1", chromosome: "22", population: "AMR", disease: "Cell growth disorders", frequency: 0.26 },
  { id: "rs506", gene: "GAB4", chromosome: "X", population: "EAS", disease: "Neurological disorders", frequency: 0.17 },
  { id: "rs507", gene: "AR", chromosome: "X", population: "EUR", disease: "Androgen disorders", frequency: 0.19 },
  { id: "rs508", gene: "NLGN4Y", chromosome: "Y", population: "AFR", disease: "Male-specific mutations", frequency: 0.40 },
  { id: "rs509", gene: "DAZ1", chromosome: "Y", population: "SAS", disease: "Fertility disorders", frequency: 0.16 }
];
