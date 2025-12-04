import type { SnpRecord } from "../data/mockSnps";

interface Props {
  rows: SnpRecord[];
}

function DataTable({ rows }: Props) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>SNP ID</th>
            <th>Gene</th>
            <th>Chrom.</th>
            <th>Population</th>
            <th>Disease</th>
            <th>Freq</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: "1rem" }}>
                No results.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.gene}</td>
                <td>{row.chromosome}</td>
                <td>{row.population}</td>
                <td>{row.disease}</td>
                <td>{row.frequency.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
