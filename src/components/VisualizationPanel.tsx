import type { SnpRecord } from "../data/mockSnps";  // ✅ CORRECT
import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Props {
  rows: SnpRecord[];
}

function VisualizationPanel({ rows }: Props) {
  const data = useMemo(() => {
    const groups: Record<
      string,
      { population: string; total: number; count: number }
    > = {};

    rows.forEach((r) => {
      if (!groups[r.population]) {
        groups[r.population] = { population: r.population, total: 0, count: 0 };
      }
      groups[r.population].total += r.frequency;
      groups[r.population].count++;
    });

    return Object.values(groups).map((g) => ({
      population: g.population,
      avgFrequency: g.total / g.count,
    }));
  }, [rows]);

  return (
    <div className="visualization-container">
      <section className="visualization-panel">
        <h3>Population Frequency Snapshot</h3>

        <div style={{ width: "100%", height: "250px" }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="population" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgFrequency" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

export default VisualizationPanel;
