import Card from "@/admin/ui/dashboard/card/card";
import Layout from "../layout";
import Transactions from "@/admin/ui/dashboard/transactions/transactions";
import Chart from "@/admin/ui/dashboard/chart/chart";
import Rightbar from "@/admin/ui/dashboard/rightbar/rightbar";

const cards = [
  {
    id: 1,
    title: "Total Users",
    getNumber() {
      try {
        const count = 20;
        return count;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
    getChange() {
      try {
        const change = 5;
        return change;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
  },
  {
    id: 2,
    title: "Total Shops",
    getNumber() {
      try {
        const count = 20;
        return count;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
    getChange() {
      try {
        const change = 5;
        return change;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
  },
  {
    id: 3,
    title: "Total Riders",
    getNumber() {
      try {
        const count = 20;
        return count;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
    getChange() {
      try {
        const change = 5;
        return change;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
    // change: 18,
  },
  {
    id: 4,
    title: "Total Customers",
    getNumber() {
      try {
        const count = 20;
        return count;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
    getChange() {
      try {
        const change = 5;
        return change;
      } catch (err) {
        console.log(err);
        return 0;
      }
    },
  },
];

const Help = () => {
  return (
    <Layout>
      <div className="bg-[#151c2c] flex gap-8 mt-8">
        <div className="flex-[3] flex flex-col gap-8">
          <div className="flex gap-8 justify-between">
            {cards.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className="flex-1">
          <Rightbar />
        </div>
      </div>
    </Layout>
  );
};

export default Help;
