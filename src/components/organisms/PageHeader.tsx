import { Text } from '@/components/atoms';
import { PeriodSelector } from '@/components/molecules/PeriodSelector';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  showPeriod?: boolean;
}

export function PageHeader({ title, subtitle, showPeriod = true }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <Text variant="heading-2">{title}</Text>
        <Text variant="body-sm" className="mt-1">
          {subtitle}
        </Text>
      </div>
      {showPeriod && <PeriodSelector />}
    </div>
  );
}
