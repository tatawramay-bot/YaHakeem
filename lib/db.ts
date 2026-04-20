import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Database schema setup for doctors table
const createDoctorsTable = async () => {
  const { data, error } = await supabase
    .from('doctors')
    .createTable({
      id: 'serial PRIMARY KEY',
      name: 'text NOT NULL',
      specialty: 'text NOT NULL',
      qualifications: 'text',
      clinic: 'text',
      address: 'text',
      days: 'text',
      phone: 'text',
      fee: 'number',
      source: 'text',
      notes: 'text',
      city: 'text'
    });

  if (error) console.error('Error creating table:', error);
  else console.log('Table created:', data);
};

// Call the function to create the table
createDoctorsTable();

export default supabase;