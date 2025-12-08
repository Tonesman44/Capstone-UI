interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  chromosome: string;
  onChromosomeChange: (v: string) => void;
  population: string;
  onPopulationChange: (v: string) => void;
  onVisualize: () => void;
  onClear: () => void;
  onSaveQuery: () => void;
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
  onSaveQuery,
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
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="19">19</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="X">X</option>
            <option value="Y">Y</option>
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
        <button className="primary-button" type="button" onClick={onVisualize}>
          Make Visualization
        </button>
        <button className="outline-button" type="button" onClick={onSaveQuery}>
          Save Query
        </button>
        <button className="ghost-button" type="button" onClick={onClear}>
          Clear
        </button>
      </div>
    </>
  );
}

export default SearchFilters;
