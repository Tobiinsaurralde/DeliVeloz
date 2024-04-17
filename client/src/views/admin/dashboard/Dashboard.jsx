import Sidenav from "../../../components/admin/sidenav/Sidenav";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Bubble, Pie } from "react-chartjs-2";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function Dashboard() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();
  return (
    <div>
      <Sidenav />
      <section className="container">
        <h1 className="mb-16">Dashboard</h1>
        <div className="flex gap-20 justify-between">
          <div className="w-1/2 max-h-80">
            <Bar
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [200, 300, 400],
                  },
                  {
                    label: "Loss",
                    data: [90, 80, 70],
                  },
                ],
              }}
            />
          </div>
          <div className="w-1/2 max-h-80">
            <Bubble
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [200, 300, 400],
                  },
                  {
                    label: "Loss",
                    data: [90, 80, 70],
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="max-h-80 mt-20">
          <Pie
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 400],
                },
              ],
            }}
          />
        </div>
      </section>
    </div>
  );
}
