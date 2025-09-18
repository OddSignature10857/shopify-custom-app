import { Box, Layout, Page, Grid, LegacyCard } from "@shopify/polaris"; // Added Grid and LegacyCard imports
import { TitleBar } from "@shopify/app-bridge-react";

export default function AdminPage() {
  return (
    <Page fullWidth>
      <TitleBar title="Dashboard" />
      <Layout>
        {/* Using the Grid layout with adjusted width and margin */}
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 6, xl: 6 }} style={{ marginTop: '200px' }} style={{ marginTop: '20px' }}>
            <LegacyCard title="SALOON" sectioned >
              <p>Total Registered saloon</p>
            </LegacyCard>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 4, lg: 6, xl: 6 }} style={{ marginTop: '20px' }}>
            <LegacyCard title="STYLIST" sectioned>
              <p>Total Registered stylist</p>
            </LegacyCard>
          </Grid.Cell>
        </Grid>
      </Layout>
      
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      gap="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
