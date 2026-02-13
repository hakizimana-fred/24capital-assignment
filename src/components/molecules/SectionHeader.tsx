interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <tr>
      <td colSpan={5} className="section-header">
        {title}
      </td>
    </tr>
  );
}
