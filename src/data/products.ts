import metalFasteners from '../assets/metal_fasteners.svg'
import ssWashers from '../assets/ss_washers.svg'
import selfClnichStudSS from '../assets/self_clinch_stud.jpeg'
import selfClnichStudMS from '../assets/self_clinch_stud_MS.jpeg'
import selfClinchNutImg from '../assets/Self-Clinch-nut.jpg'
import nutMsertsRivetImg from '../assets/Nut - Mserts - Rivet.jpg'

export const categories = [
  {
    id: 'self-clinch-blind-steel-screws',
    name: 'Self Clinch Blind Steel',
    items: [
      { id: 'ms1', name: 'MS', img: selfClnichStudMS, description: '', industries: ['Automobile'] },
      { id: 'ms2', name: 'SS', img: selfClnichStudSS, description: '', industries: ['Automobile'] },
    ],
  },
  {
    id: 'self-clinch-nut',
    name: 'Self Clinch Nut', 
    items: [
      { id: 'MS', name: 'MS', img: selfClinchNutImg, description: '', industries: ['Automobile'] },
      { id: 'SS', name: 'SS', img: selfClinchNutImg, description: '', industries: ['Automobile'] },
    ],
  },
  {
    id: 'nut-mserts-rivet',
    name: 'Nut - Mserts - Rivet',
    items: [
      { id: 'ib1', name: 'High Tensile Bolt', img: nutMsertsRivetImg, description: 'Used for structural fastening', industries: ['Automobile'] },
    ],
  },
  {
    id: 'battery-tray-handlers',
    name: 'Battery Tray Handlers',
    items: [

      { id: 'spring loaded', name: '140 * 40 spring loaded', img: ssWashers, description: '', industries: ['Automobile'] },
      { id: 'spring loaded', name: '110 * 40 spring loaded', img: ssWashers,description: '', industries: ['Automobile'] },
      { id: '100 CD Foldable Handle', name: '100 CD Foldable Handle ', img: ssWashers, description: '', industries: ['Automobile'] },
      { id: '76 CD Foldable Handle', name: '76 CD Foldable Handle ', img: ssWashers, description: '', industries: ['Automobile'] },

    ],
  },
  {
    id: 'SS Fasteners',
    name: 'SS Fasteners',
    items: [
    ]
 
  },
  {
    id: 'Weld Nuts',
    name: 'Weld Nuts',
    items: [
      { id: 'MS', name: 'MS', img: metalFasteners, description: '', industries: ['Automobile'] },
      { id: 'SS', name: 'SS', img: metalFasteners, description: '', industries: ['Automobile'] },  ],
  },
{
    id: 'POP Ravet',
    name: 'POP Ravet',
    items: [
      { id: 'AL', name: 'AL', img: metalFasteners, description: '', industries: ['Automobile'] },
      { id: 'SS', name: 'SS', img: metalFasteners, description: '', industries: ['Automobile'] },  ],
  },
   {
    id: 'self-clinch-Stud',
    name: 'Self Clinch Stud',
    items: [
      { id: 'MS', name: 'MS', img: metalFasteners, description: '', industries: ['Automobile'] },
      { id: 'SS', name: 'SS', img: metalFasteners, description: '', industries: ['Automobile'] },
    ],
  },
   {
    id: 'Dutch Bolts',
    name: 'Dutch Bolts',
    items: [
      { id: 'MS', name: 'MS', img: metalFasteners, description: '', industries: ['Automobile'] },
      { id: 'SS', name: 'SS', img: metalFasteners, description: '', industries: ['Automobile'] },
    ],
  },
  {
    id: 'Washers',
    name: 'Washers',
    items: [
      { id: 'Plain washer', name: 'Plain Washer', img: metalFasteners, description: '', industries: ['Automobile'] },
      { id: 'Spring Washer', name: 'Spring Washer', img: metalFasteners, description: '', industries: ['Automobile'] },
    ],
  }

]
