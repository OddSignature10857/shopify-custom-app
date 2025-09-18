import { Page, LegacyCard, DataTable, Layout } from '@shopify/polaris'; // Corrected the import
import { TitleBar } from '@shopify/app-bridge-react';
import React from 'react';

export default function PermissionPage() {
  return (
    <Page>
      <TitleBar title="Permission Page" />
      <Layout>
        <Layout.Section>
          {/* Using DataTable with Pagination inside PermissionPage */}
          <DataTableWithPaginationExample />
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function DataTableWithPaginationExample() {
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];

  return (
    <LegacyCard>
      <DataTable
        columnContentTypes={['text', 'numeric', 'numeric', 'numeric', 'numeric']}
        headings={['Name', 'Price', 'SKU Number', 'Net quantity', 'Net sales']}
        rows={rows}
        totals={['', '', '', 255, '$155,830.00']}
        pagination={{
          hasNext: true,
          onNext: () => {}, // Implement the pagination functionality as needed
        }}
      />
    </LegacyCard>
  );
}
