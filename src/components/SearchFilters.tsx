interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  chromosome: string;
  onChromosomeChange: (v: string) => void;
  population: string;
  onPopulationChange: (v: string) => void;
  onVisualize: () => void;
  onClear: () => void;          
}

function SearchFilters({
  search,
  onSearchChange,
  chromosome,
  onChromosomeChange,
  population,
  onPopulationChange,
  onVisualize,
  onClear,
}: Props) {
  return (
    <>
      <div className="filters-row">
        <label>
          Search (gene, SNP ID, disease)
          <input
            className="input"
            type="text"
            placeholder="e.g., BRCA1, rs12345, breast cancer"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </label>

        <label>
          Chromosome
          <select
            className="select"
            value={chromosome}
            onChange={(e) => onChromosomeChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="7">7</option>
            <option value="11">11</option>
            <option value="17">17</option>
            <option value="19">19</option>
          </select>
        </label>

        <label>
          Population
          <select
            className="select"
            value={population}
            onChange={(e) => onPopulationChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="AFR">AFR</option>
            <option value="AMR">AMR</option>
            <option value="EAS">EAS</option>
            <option value="EUR">EUR</option>
            <option value="SAS">SAS</option>
          </select>
        </label>
      </div>

      <div className="filters-actions">
        <button className="outline-button" onClick={onVisualize}>
          Make Visualization ✨
        </button>

        <button className="ghost-button" type="button" onClick={onClear}>
          Clear
        </button>
      </div>
    </>
  );
}

export default SearchFilters;
