import { ImageSourcePropType } from 'react-native';

export type ChargerConnector = {
  type: string;
  count: number;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Station = {
  id: string;
  name: string;
  title: string;
  statusLabel: string;
  location: string;
  coordinates: Coordinates;
  photo: ImageSourcePropType;
  isOpen: boolean;
  closesAt: string;
  rating: string;
  reviewsCount: number;
  chargersCount: number;
  connectorTypes: ChargerConnector[];
  amenities: string[];
  accessibility: string[];
  paymentMethods: string[];
};

export const stationsMock: Station[] = [
  {
    id: 'fluindo-pinheiros',
    name: 'Flui(ndo)',
    title: 'Flui(ndo) - Ponto de recarga',
    statusLabel: 'Status atual: pouco movimentado',
    location: 'Pinheiros, São Paulo',
    coordinates: { latitude: -23.5629, longitude: -46.6821 },
    photo: require('@/assets/images/ponto-recarga-fluindo.jpg'),
    isOpen: true,
    closesAt: '22:30',
    rating: '4,9',
    reviewsCount: 16,
    chargersCount: 3,
    connectorTypes: [
      { type: 'CCS', count: 2 },
      { type: 'CA', count: 1 },
    ],
    amenities: ['Banheiro', 'Wi-fi gratuito'],
    accessibility: [
      'Entrada com acessibilidade para pessoas com cadeira de rodas',
      'Banheiro adaptado',
    ],
    paymentMethods: ['Cartão de crédito', 'Pix', 'Dinheiro', 'Cartão de débito'],
  },
  {
    id: 'ecocarga-itaim-bibi',
    name: 'EcoCarga Itaim',
    title: 'EcoCarga Itaim - Ponto de recarga',
    statusLabel: 'Status atual: movimentado',
    location: 'Itaim Bibi, São Paulo',
    coordinates: { latitude: -23.585, longitude: -46.6797 },
    photo: require('@/assets/images/ponto-recarga-EcoCargaItaim.jpg'),
    isOpen: true,
    closesAt: '23:00',
    rating: '4,6',
    reviewsCount: 42,
    chargersCount: 4,
    connectorTypes: [
      { type: 'CCS', count: 3 },
      { type: 'CHAdeMO', count: 1 },
    ],
    amenities: ['Café', 'Wi-fi gratuito', 'Estacionamento coberto'],
    accessibility: ['Entrada com acessibilidade para pessoas com cadeira de rodas'],
    paymentMethods: ['Cartão de crédito', 'Pix', 'Cartão de débito'],
  },
  {
    id: 'volt-express-moema',
    name: 'Volt Express Moema',
    title: 'Volt Express Moema - Ponto de recarga',
    statusLabel: 'Status atual: pouco movimentado',
    location: 'Moema, São Paulo',
    coordinates: { latitude: -23.6001, longitude: -46.6664 },
    photo: require('@/assets/images/ponto-recarga-VoltExpressMoema.jpg'),
    isOpen: false,
    closesAt: '20:00',
    rating: '4,3',
    reviewsCount: 9,
    chargersCount: 2,
    connectorTypes: [{ type: 'CA', count: 2 }],
    amenities: ['Banheiro'],
    accessibility: ['Banheiro adaptado'],
    paymentMethods: ['Cartão de crédito', 'Pix'],
  },
  {
    id: 'recarga-facil-paulista',
    name: 'Recarga Fácil Paulista',
    title: 'Recarga Fácil Paulista - Ponto de recarga',
    statusLabel: 'Status atual: muito movimentado',
    location: 'Av. Paulista, São Paulo',
    coordinates: { latitude: -23.5613, longitude: -46.6565 },
    photo: require('@/assets/images/ponto-recarga-RecargaFacilPaulista.jpg'),
    isOpen: true,
    closesAt: '00:00',
    rating: '4,7',
    reviewsCount: 128,
    chargersCount: 6,
    connectorTypes: [
      { type: 'CCS', count: 4 },
      { type: 'CA', count: 2 },
    ],
    amenities: ['Banheiro', 'Wi-fi gratuito', 'Loja de conveniência'],
    accessibility: [
      'Entrada com acessibilidade para pessoas com cadeira de rodas',
      'Banheiro adaptado',
      'Vaga reservada próxima ao carregador',
    ],
    paymentMethods: ['Cartão de crédito', 'Pix', 'Dinheiro', 'Cartão de débito'],
  },
  {
    id: 'santana-power-point',
    name: 'Santana Power Point',
    title: 'Santana Power Point - Ponto de recarga',
    statusLabel: 'Status atual: pouco movimentado',
    location: 'Santana, São Paulo',
    coordinates: { latitude: -23.506, longitude: -46.6236 },
    photo: require('@/assets/images/ponto-recarga-SantanaPowerPoint.jpg'),
    isOpen: true,
    closesAt: '21:30',
    rating: '4,1',
    reviewsCount: 5,
    chargersCount: 2,
    connectorTypes: [{ type: 'CCS', count: 1 }, { type: 'CA', count: 1 }],
    amenities: ['Wi-fi gratuito'],
    accessibility: ['Entrada com acessibilidade para pessoas com cadeira de rodas'],
    paymentMethods: ['Pix', 'Cartão de débito'],
  },
];
