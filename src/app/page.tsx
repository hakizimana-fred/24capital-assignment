import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { FundProgressionTemplate } from '@/components/templates/FundProgressionTemplate';

export default function Home() {
  return (
    <DashboardLayout>
      <FundProgressionTemplate />
    </DashboardLayout>
  );
}
