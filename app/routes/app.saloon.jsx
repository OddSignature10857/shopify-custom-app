import { Page, LegacyCard, DataTable, Layout } from '@shopify/polaris'; // Corrected the import
import { TitleBar } from '@shopify/app-bridge-react';

export default function SaloonPage() {
  return (
    <Page>
      <TitleBar title="Saloon" />
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
    ['Emerald Silk Gown', 'emerland@gmail.com', 124689, 140, 'New York', '10001'],
   ['Emerald Silk Gown', 'emerland@gmail.com', 124689, 140, 'New York', '10001'],
   ['Emerald Silk Gown', 'emerland@gmail.com', 124689, 140, 'New York', '10001'],
  ];

  return (
    <LegacyCard>
      <DataTable
        columnContentTypes={['text', 'text', 'numeric', 'numeric', 'numeric',, 'numeric']}
        headings={['Name', 'Email', 'Business Number', 'State', 'Adress', 'Zip Code']}
        rows={rows}
      
        pagination={{
          hasNext: true,
          onNext: () => {}, // Implement the pagination functionality as needed
        }}
         footerContent={`Showing ${rows.length} of ${rows.length} results`}
      />
    </LegacyCard>
  );
}
