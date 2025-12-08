import { useMemo, useState } from "react";
import { mockSnps } from "../data/mockSnps";
import type { SnpRecord } from "../data/mockSnps";

import SearchFilters from "./SearchFilters";
import DataTable from "./DataTable";
import VisualizationPanel from "./VisualizationPanel";
import { useAuth } from "../hooks/useAuth";

function ExplorerPage() {
  const [search, setSearch] = useState("");
  const [chromosome, setChromosome] = useState("");
  const [population, setPopulation] = useState("");
  const [showViz, setShowViz] = useState(false);
  const { user, saveQuery } = useAuth();

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

  const handleSaveQuery = () => {
    if (!user) {
      alert("Please log in to save queries.");
      return;
    }

    const summary = `search="${search || "∅"}", chr="${chromosome || "All"}", pop="${
      population || "All"
    }"`;
    saveQuery(summary);
    alert("Query saved to your profile!");
  };

  return (
    <div className="explorer-layout">
      <div className="explorer-header">
        <div>
          <h2 className="explorer-title">PopSNP Explorer</h2>
          <p className="explorer-description">
            Run mock SNP queries by gene, SNP ID, or disease, filter by chromosome and population,
            and generate a quick visualization to support Dr. Kulathinal&apos;s research
            workflows.
          </p>
        </div>
      </div>

      <div className="card">
        <SearchFilters
          search={search}
          onSearchChange={setSearch}
          chromosome={chromosome}
          onChromosomeChange={setChromosome}
          population={population}
          onPopulationChange={setPopulation}
          onVisualize={() => setShowViz(true)}
          onClear={handleClear}
          onSaveQuery={handleSaveQuery}
        />

        <DataTable rows={rows} />

        {showViz && <VisualizationPanel rows={rows} />}
      </div>
    </div>
  );
}

export default ExplorerPage;
