
export interface GristConfig {
  docId: string;  
  tableId: string;
  apiTokenGrist?: string;
  gristApiUrl?: string;
  autoCreateColumns?: boolean;
}

export const defaultConfig: GristConfig = {
  docId: 'YOUR_DOC_ID',
  tableId: 'YOUR_TABLE_ID',
  apiTokenGrist: undefined, 
  gristApiUrl: 'https://docs.getgrist.com',
  autoCreateColumns: true 
};
