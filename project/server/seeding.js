const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const time_with_offset = (days = 0, hours = 0, minutes = 0) => {
  let now = new Date(
    new Date().valueOf() - new Date().getTimezoneOffset() * 60000
  );
  let offset =
    days * 24 * 60 * 60 * 1000 + hours * 60 * 60 * 1000 + minutes * 60 * 1000;
  let new_time = new Date(now.valueOf() + offset);
  return new_time;
};

const random_time_within_10_days = () => {
  let days = Math.floor(Math.random() * (10 - -10)) - 10;
  let hours = Math.floor(Math.random() * (24 - -24)) - 24;
  let minutes = Math.floor(Math.random() * (60 - -60)) - 60;
  return time_with_offset(days, hours, minutes);
};

const records = [
  {
    customer_name: "James",
    age: 23,
    phone: "843-422-7541",
    location: "Delhi, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Robert",
    age: 34,
    phone: "893-453-1342",
    location: "Delhi, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "John",
    age: 24,
    phone: "890-079-6790",
    location: "Delhi, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Michael",
    age: 34,
    phone: "925-674-2345",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "David",
    age: 45,
    phone: "893-435-7886",
    location: "Delhi, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "William",
    age: 36,
    phone: "890-570-4345",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Richard",
    age: 43,
    phone: "453-786-9879",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Joseph",
    age: 42,
    phone: "567-877-8767",
    location: "Jaipur, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Christopher",
    age: 57,
    phone: "676-674-9800",
    location: "Jaipur, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Charles",
    age: 25,
    phone: "567-688-0985",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Daniel",
    age: 37,
    phone: "556-456-5433",
    location: "Jaipur, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Matthew ",
    age: 27,
    phone: "345-456-3903",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Anthony",
    age: 48,
    phone: "879-356-3445",
    location: "Jaipur, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Mark",
    age: 67,
    phone: "873-987-9873",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Donald ",
    age: 30,
    phone: "987-875-9874",
    location: "Jaipur, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Steven",
    age: 43,
    phone: "624-795-4170",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Andrew",
    age: 25,
    phone: "789-098-7892",
    location: "Jaipur, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Paul",
    age: 54,
    phone: "789-899-8980",
    location: "Mumbai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Joshua",
    age: 67,
    phone: "980-467-5677",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Kenneth",
    age: 42,
    phone: "890-234-8904",
    location: "Mumbai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Kevin",
    age: 22,
    phone: "564-345-9874",
    location: "Mumbai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Brian",
    age: 34,
    phone: "345-657-5677",
    location: "Mumbai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "George",
    age: 45,
    phone: "445-456-4667",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Timothy",
    age: 67,
    phone: "563-456-5667",
    location: "Mumbai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Ronald",
    age: 56,
    phone: "984-667-4789",
    location: "Chennai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Jason",
    age: 78,
    phone: "894-678-4556",
    location: "Mumbai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Edward",
    age: 27,
    phone: "567-679-3456",
    location: "Chennai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Jeffrey",
    age: 40,
    phone: "904-579-0098",
    location: "Chennai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Ryan",
    age: 20,
    phone: "980-657-9-0055",
    location: "Banglore, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Jacob",
    age: 34,
    phone: "895-905-9905",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Gary",
    age: 30,
    phone: "874-784-6743",
    location: "Banglore, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Nicholas",
    age: 40,
    phone: "678-784-8984",
    location: "Banglore, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Eric",
    age: 50,
    phone: "890-989-0987",
    location: "Banglore, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Jonathan	",
    age: 60,
    phone: "098-984-9843",
    location: "Banglore, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Stephen",
    age: 67,
    phone: "990-848-9843",
    location: "Chennai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Larry",
    age: 68,
    phone: "989-094-9843",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Justin",
    age: 79,
    phone: "978-978-9837",
    location: "Chennai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Scott",
    age: 67,
    phone: "989-983-9873",
    location: "Kolkata, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Benjamin",
    age: 43,
    phone: "093-988-9837",
    location: "Kolkata, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Samuel",
    age: 44,
    phone: "889-893-9083",
    location: "Chennai, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Alexander",
    age: 30,
    phone: "980-890-7684",
    location: "Kolkata, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Patrick",
    age: 42,
    phone: "980-808-8970",
    location: "Noida, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Raymond",
    age: 33,
    phone: "567-898-7893",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Dennis",
    age: 55,
    phone: "908-450-5789",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Adam",
    age: 66,
    phone: "890-789-9443",
    location: "Noida, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Henry",
    age: 78,
    phone: "890-345-0978",
    location: "Noida, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Douglas",
    age: 27,
    phone: "908-983-9837",
    location: "Noida, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Ethan",
    age: 54,
    phone: "893-903-0983",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Walter",
    age: 65,
    phone: "903-888-9830",
    location: "Noida, India",
    created_at: random_time_within_10_days(),
  },
  {
    customer_name: "Austin",
    age: 48,
    phone: "901-893-9003",
    location: "Hyderabad, India",
    created_at: random_time_within_10_days(),
  },
];

const seed = async () => {
  try {
    const query = `INSERT INTO records (customer_name, age, phone, location, created_at) VALUES ($1, $2, $3, $4, $5)`;
    for (let record of records) {
      await pool.query(query, [
        record.customer_name,
        record.age,
        record.phone,
        record.location,
        record.created_at,
      ]);
    }
    console.log("Seeding complete");
  } catch (error) {
    console.error("Error seeding database", error);
  }
};

const drop = async () => {
  try {
    await pool.query("DROP TABLE IF EXISTS records");
    console.log("Dropped table");
  } catch (error) {
    console.error("Error dropping table", error);
  }
};

const create = async () => {
  try {
    const query = `CREATE TABLE records (
        sno SERIAL PRIMARY KEY,
        customer_name VARCHAR(255),
        age INTEGER,
        phone VARCHAR(20),
        location VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
    await pool.query(query);
    console.log("Created table");
  } catch (error) {
    console.error("Error creating table", error);
  }
};


const drop_create_seed = async () => {
    await drop();
    await create();
    await seed();
}

drop_create_seed();