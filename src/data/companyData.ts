import { walkerImg, aboutImg, restorationImg, materialsImg } from '../assets/images';

export interface DivisionInfo {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  keyCapabilities: string[];
  companiesCount: string;
  exampleCompanies: string[];
}

export interface ProjectInfo {
  id: string;
  title: string;
  location: string;
  divisionId: string;
  divisionName: string;
  companyInvolved: string;
  scope: string;
  outcome: string;
  metric: string;
  image: string;
  completionYear: string;
  highlights: string[];
}

export interface OperatingCompany {
  id: string;
  name: string;
  divisionId: string;
  divisionName: string;
  specialty: string;
  headquarters: string;
  foundingYear: string;
  description: string;
  featuredProject: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  organization: string;
  location: string;
  projectContext: string;
}

export interface OfficeLocation {
  city: string;
  region: string;
  country: string;
  address: string;
  phone: string;
  role: string;
}

export const DIVISIONS: DivisionInfo[] = [
  {
    id: 'development',
    number: '01',
    name: 'Real Estate Development',
    tagline: 'Master-planned residential & commercial communities',
    description: 'Transforming land into enduring architectural landmarks. We oversee site acquisition, zoning, master planning, architecture, construction management, and asset stabilization.',
    image: walkerImg,
    keyCapabilities: [
      'High-rise mixed-use residential towers',
      'Master-planned urban community developments',
      'Commercial office & industrial logistics hubs',
      'Full lifecycle zoning, municipal entitlements & asset management'
    ],
    companiesCount: '4 Specialized Entities',
    exampleCompanies: ['BMG Real Estate', 'BM Commercial Properties', 'BM Land Holdings', 'Metro Urban Developments']
  },
  {
    id: 'construction',
    number: '02',
    name: 'Construction Support Services',
    tagline: 'Heavy civil, precision cutting & engineering support',
    description: 'Providing mission-critical field support to major infrastructure and commercial developments. Specialists in precision concrete sawing, wire cutting, ground scanning, and civil excavation.',
    image: aboutImg,
    keyCapabilities: [
      'Deep diamond wire sawing & wall cutting',
      'Ground penetrating radar (GPR) & concrete scanning',
      'Crane, rigging & heavy civil site support',
      'Excavation shoring & site utility infrastructure'
    ],
    companiesCount: '6 Specialized Entities',
    exampleCompanies: ['Urban Sawing & Scanning', 'BM Crane & Rigging', 'Pacific Diamond Cutting', 'Metro Soil & Shoring']
  },
  {
    id: 'restoration',
    number: '03',
    name: 'Structural Restoration & Waterproofing',
    tagline: 'Preserving structural integrity and building envelopes',
    description: 'Industry-leading specialists in structural concrete rehabilitation, high-pressure chemical grouting, building envelope waterproofing, and post-tensioned tendon restoration.',
    image: restorationImg,
    keyCapabilities: [
      'High-pressure chemical grout & polyurethane injection',
      'Building envelope membrane rehabilitation & sealants',
      'Seismic strengthening & structural carbon-fiber wrap',
      'Parkade deck restoration & cathodic corrosion protection'
    ],
    companiesCount: '5 Specialized Entities',
    exampleCompanies: ['Polycrete Restorations', 'Pro-Shield Waterproofing', 'Pacific Structural Solutions', 'Tendon Tech Systems']
  },
  {
    id: 'materials',
    number: '04',
    name: 'Materials Supply',
    tagline: 'Premium architectural precast, aggregates & ready-mix',
    description: 'Direct manufacturer and supplier of architectural precast concrete elements, custom masonry, certified construction aggregates, and specialized ready-mix solutions across western North America.',
    image: materialsImg,
    keyCapabilities: [
      'Architectural precast concrete panels & custom streetscapes',
      'Certified high-durability washed aggregates & gravels',
      'High-performance specialized concrete mix formulations',
      'Custom molds, site furnishings & municipal infrastructure'
    ],
    companiesCount: '5 Specialized Entities',
    exampleCompanies: ['Sanderson Concrete', 'Fraser Valley Aggregates', 'Cascadia Ready Mix', 'BM Precast Systems']
  }
];

export const STATS = [
  {
    value: 20,
    suffix: '+',
    label: 'Operating Companies',
    context: 'Integrated across 4 major sectors'
  },
  {
    value: 500,
    suffix: '+',
    label: 'Team Members',
    context: 'Engineers, trades & directors'
  },
  {
    value: 4,
    suffix: '',
    label: 'Core Divisions',
    context: 'From land acquisition to finished supply'
  },
  {
    value: 4,
    suffix: '',
    label: 'Regional Hubs',
    context: 'Vancouver, Seattle, Portland, New Delhi'
  },
  {
    value: 30,
    suffix: '+',
    label: 'Years of Excellence',
    context: 'Founded on integrity & craft'
  }
];

export const FEATURED_PROJECTS: ProjectInfo[] = [
  {
    id: 'walker-house',
    title: 'Walker House',
    location: 'North Delta, British Columbia',
    divisionId: 'development',
    divisionName: 'Real Estate Development',
    companyInvolved: 'BMG Real Estate',
    scope: '29-storey mixed-use residential tower featuring 264 contemporary residences, 17,000 sq ft of community amenities, and vibrant street-level retail.',
    outcome: 'Completed on schedule with 100% pre-sales absorption, establishing a new architectural benchmark for urban density and transit-oriented living in North Delta.',
    metric: '29 Storeys · 264 Residences',
    image: walkerImg,
    completionYear: '2025',
    highlights: [
      'Comprehensive master planning and municipal rezoning',
      'Full in-house construction management by BM Group',
      'Integrated materials supply via Sanderson Concrete precast details',
      'Sustainable building envelope and green rooftop garden'
    ]
  },
  {
    id: 'pacific-transit-gateway',
    title: 'Pacific Transit Gateway Hub',
    location: 'Metro Vancouver, BC',
    divisionId: 'construction',
    divisionName: 'Construction Support Services',
    companyInvolved: 'Urban Sawing & Scanning',
    scope: 'Sub-surface structural scanning, utility mapping, and continuous precision diamond wire sawing through 36-inch reinforced concrete abutments during live transit operations.',
    outcome: 'Zero disruptions to commuter transit corridors, executed within precision tolerances of ±2mm under strict seismic standards.',
    metric: '4,200 m² Precision Wire Sawing',
    image: aboutImg,
    completionYear: '2024',
    highlights: [
      'Non-destructive GPR mapping of high-voltage conduits',
      'Nighttime wire cutting sequence with low acoustic impact',
      'Seismic collar installations for bridge piers',
      'Zero lost-time safety incidents across 18 months'
    ]
  },
  {
    id: 'cascadia-corridor-restoration',
    title: 'Cascadia Commercial Plaza Restoration',
    location: 'Seattle & Portland Corridor',
    divisionId: 'restoration',
    divisionName: 'Structural Restoration & Waterproofing',
    companyInvolved: 'Polycrete Restorations',
    scope: 'Complete structural rejuvenation of a 4-level underground commercial parkade, including hydrodemolition of delaminated concrete, polyurethane water-stop injection, and traffic coating application.',
    outcome: 'Extended structural lifecycle by 35 years while keeping 60% of parking operational during active renovation phases.',
    metric: '185,000 sq ft Waterproofed Deck',
    image: restorationImg,
    completionYear: '2025',
    highlights: [
      'Dual-component chemical grout pressure injection',
      'Post-tensioned cable corrosion inspection and repair',
      'Heavy-duty elastomeric vehicular traffic membrane',
      'Full 10-year systemic waterproofing warranty'
    ]
  },
  {
    id: 'fraser-valley-civic',
    title: 'Fraser Valley Civic Infrastructure & Streetscape',
    location: 'Abbotsford / Langley, BC',
    divisionId: 'materials',
    divisionName: 'Materials Supply',
    companyInvolved: 'Sanderson Concrete',
    scope: 'Custom design, mold fabrication, and production of over 1,200 modular architectural precast concrete panels, security bollards, and custom civic seating.',
    outcome: 'Delivered proprietary high-durability 60 MPa mix with acid-etched architectural finishes that resist freeze-thaw degradation and graffiti.',
    metric: '1,200+ Architectural Precast Units',
    image: materialsImg,
    completionYear: '2024',
    highlights: [
      'Custom wooden and steel CNC pattern fabrication',
      'Locally sourced Fraser Valley low-carbon aggregates',
      'Stringent CSA A23.4 precast quality verification',
      'Just-in-time logistics delivery to constrained urban jobsites'
    ]
  }
];

export const OPERATING_COMPANIES: OperatingCompany[] = [
  {
    id: 'bmg-real-estate',
    name: 'BMG Real Estate',
    divisionId: 'development',
    divisionName: 'Real Estate Development',
    specialty: 'High-rise residential & master-planned communities',
    headquarters: 'Vancouver, BC',
    foundingYear: '1998',
    description: 'Leading property development firm shaping urban skylines with landmark residences like Walker House.',
    featuredProject: 'Walker House, North Delta'
  },
  {
    id: 'polycrete',
    name: 'Polycrete Restorations',
    divisionId: 'restoration',
    divisionName: 'Structural Restoration & Waterproofing',
    specialty: 'Concrete rehabilitation, waterproofing & chemical grouting',
    headquarters: 'Vancouver & Seattle',
    foundingYear: '1982',
    description: 'Pioneers in high-pressure grout injection, building envelope sealants, and infrastructure rehabilitation.',
    featuredProject: 'Cascadia Commercial Plaza'
  },
  {
    id: 'urban-sawing',
    name: 'Urban Sawing & Scanning',
    divisionId: 'construction',
    divisionName: 'Construction Support Services',
    specialty: 'Diamond wire cutting, slab sawing & GPR radar',
    headquarters: 'Vancouver, BC',
    foundingYear: '2004',
    description: 'Precision concrete cutting and non-destructive utility detection for heavy civil, commercial, and bridge engineering.',
    featuredProject: 'Pacific Transit Gateway Hub'
  },
  {
    id: 'sanderson-concrete',
    name: 'Sanderson Concrete',
    divisionId: 'materials',
    divisionName: 'Materials Supply',
    specialty: 'Custom architectural precast & civil furnishings',
    headquarters: 'Surrey, BC',
    foundingYear: '1929',
    description: 'Nearly a century of Canadian precast excellence, supplying custom architectural panels and streetscapes across North America.',
    featuredProject: 'Fraser Valley Civic Infrastructure'
  },
  {
    id: 'bm-commercial',
    name: 'BM Commercial Properties',
    divisionId: 'development',
    divisionName: 'Real Estate Development',
    specialty: 'Light industrial, office parks & logistics distribution',
    headquarters: 'Vancouver, BC',
    foundingYear: '2010',
    description: 'Developing high-efficiency distribution centres and commercial campuses across the Pacific Northwest.',
    featuredProject: 'Fraser Gateway Logistics Park'
  },
  {
    id: 'pro-shield',
    name: 'Pro-Shield Waterproofing',
    divisionId: 'restoration',
    divisionName: 'Structural Restoration & Waterproofing',
    specialty: 'Subgrade membrane barriers & podium sealants',
    headquarters: 'Portland, OR',
    foundingYear: '2012',
    description: 'Commercial membrane systems protecting multi-level subgrade parkades from hydrostatic pressure.',
    featuredProject: 'Portland Innovation Center Subgrade'
  },
  {
    id: 'fv-aggregates',
    name: 'Fraser Valley Aggregates',
    divisionId: 'materials',
    divisionName: 'Materials Supply',
    specialty: 'Crushed rock, washed sand & structural drainage gravel',
    headquarters: 'Abbotsford, BC',
    foundingYear: '1995',
    description: 'High-volume aggregate quarries meeting rigorous civil engineering gradation standards.',
    featuredProject: 'Trans-Canada Highway Infrastructure'
  },
  {
    id: 'bm-crane',
    name: 'BM Crane & Rigging',
    divisionId: 'construction',
    divisionName: 'Construction Support Services',
    specialty: 'Tower crane erection, heavy hoist & logistics',
    headquarters: 'Seattle, WA',
    foundingYear: '2016',
    description: 'Heavy lifting solutions and certified rigging crews for high-elevation structural steel and precast placement.',
    featuredProject: 'Downtown Seattle Core Tower'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'BM Group has been an exceptional partner on our large-scale urban developments. Their ability to self-perform across structural restoration, scanning, and materials supply eliminates friction between trades and accelerates our critical path.',
    author: 'David R. Sutherland',
    title: 'Senior Vice President of Development',
    organization: 'Pacific Crest Urban Properties',
    location: 'Vancouver, BC',
    projectContext: 'Mixed-Use High-Rise Development'
  },
  {
    quote: 'When we needed urgent precision wire sawing through 3-foot structural walls inside an active transit terminal, Urban Sawing delivered flawlessly on a 48-hour shutdown window with zero safety deviations.',
    author: 'Elena Rostova',
    title: 'Chief Infrastructure Project Director',
    organization: 'Cascadia Transit & Civil Authority',
    location: 'Seattle, WA',
    projectContext: 'Regional Transit Intermodal Station'
  },
  {
    quote: 'Sanderson Concrete’s precast craftsmanship and engineering rigor gave our civic project the exact architectural finish the city demanded. Working with one group backed by 500 professionals gives developers unmatched peace of mind.',
    author: 'Marcus Chen, P.Eng',
    title: 'Principal Structural Consultant',
    organization: 'Northwest Civil Engineering Partners',
    location: 'Portland, OR',
    projectContext: 'Civic Cultural Pavilion & Plaza'
  }
];

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Vancouver',
    region: 'British Columbia',
    country: 'Canada',
    address: 'Head Office · 200 - 8333 130th St, Surrey, BC',
    phone: '+1 (604) 590-3131',
    role: 'Corporate Global Headquarters & Executive Operations'
  },
  {
    city: 'Seattle',
    region: 'Washington',
    country: 'United States',
    address: 'US Regional Office · 1100 2nd Ave, Seattle, WA',
    phone: '+1 (206) 486-9200',
    role: 'Pacific Northwest Heavy Civil & Restoration Division'
  },
  {
    city: 'Portland',
    region: 'Oregon',
    country: 'United States',
    address: 'Regional Hub · 1001 SW 5th Ave, Portland, OR',
    phone: '+1 (503) 914-1180',
    role: 'Commercial Waterproofing & Materials Logistics'
  },
  {
    city: 'New Delhi',
    region: 'National Capital Region',
    country: 'India',
    address: 'International Office · Connaught Place, New Delhi',
    phone: '+91 11 4150 8800',
    role: 'Global Design Engineering & Strategic Procurement'
  }
];
