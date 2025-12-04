import { useMemo, useState } from "react";
import { mockSnps } from "../data/mockSnps";
import type { SnpRecord } from "../data/mockSnps";

import SearchFilters from "./SearchFilters";
import DataTable from "./DataTable";
import VisualizationPanel from "./VisualizationPanel";

function ExplorerPage() {
  const [search, setSearch] = useState("");
  const [chromosome, setChromosome] = useState("");
  const [population, setPopulation] = useState("");
  const [showViz, setShowViz] = useState(false);

  const rows: SnpRecord[] = useMemo(() => {
    return mockSnps.filter((row) => {
      const s = search.toLowerCase();
      const matchesSearch =
        !search ||
        row.id.toLowerCase().includes(s) ||
        row.gene.toLowerCase().includes(s) ||
        row.disease.toLowerCase().includes(s);

      const matchesChrom = !chromosome || row.chromosome === chromosome;
      const matchesPop = !population || row.population === population;

      return matchesSearch && matchesChrom && matchesPop;
    });
  }, [search, chromosome, population]);

  const handleClear = () => {
    setSearch("");
    setChromosome("");
    setPopulation("");
    setShowViz(false);
  };

  return (
    <div className="explorer-layout">
      <h2 className="explorer-title">PopSNP Explorer</h2>
      <p className="explorer-description">
        Search mock SNP records by gene, SNP ID, or disease, filter by chromosome and population,
        and generate a simple visualization for Dr. Kulathinal&apos;s research scenarios.
      </p>

      <div className="card">
        <SearchFilters
          search={search}
          onSearchChange={setSearch}
          chromosome={chromosome}
          onChromosomeChange={setChromosome}
          population={population}
          onPopulationChange={setPopulation}
          onVisualize={() => setShowViz(true)}
          onClear={handleClear}          // 👈 pass clear handler
        />

        <DataTable rows={rows} />

        {showViz && <VisualizationPanel rows={rows} />}
      </div>
    </div>
  );
}

export default ExplorerPage;
