import IconCard from '@/components/IconCard';
import { FluiColors, FluiFonts, Spacing } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const icons = {
  bateria: require('@/assets/icons/bateria.png'),
  status: require('@/assets/icons/status.png'),
  food: require('@/assets/icons/food.png'),
  recarga: require('@/assets/icons/recarga.png'),
  info: require('@/assets/icons/info.png'),
  seusevs: require('@/assets/icons/seusevs.png'),
};

const CARD_BG = '#f2f2f2';
const DIVIDER_COLOR = 'rgba(255,255,255,0.15)';

const H_PADDING = Spacing.md;
const GRID_GAP = 17;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = Math.min(SCREEN_WIDTH, 480);
const CARD_SIZE = ((CONTENT_WIDTH - H_PADDING * 2 - GRID_GAP * 2) / 3) * 0.88;
type GridItem = {
  key: string;
  title: string;
  render: () => React.ReactNode;
};

const GRID_ROWS: GridItem[][] = [
  [
    {
      key: 'bateria',
      title: 'Bateria',
      render: () => (
        <Image source={icons.bateria} style={{ width: CARD_SIZE * 0.6, height: CARD_SIZE * 0.6 }} resizeMode="contain" />
      ),
    },
    {
      key: 'seusevs',
      title: 'Seus EVs',
      render: () => (
        <>
          <Ionicons name="car-sport" size={CARD_SIZE * 0.52} color={FluiColors.inputText} />
          <Image source={icons.seusevs} style={{ width: CARD_SIZE * 0.6, height: CARD_SIZE * 0.16, marginTop: 2 }} resizeMode="contain" />
        </>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      render: () => (
        <Image source={icons.status} style={{ width: CARD_SIZE * 0.46, height: CARD_SIZE * 0.78 }} resizeMode="contain" />
      ),
    },
  ],
  [
    {
      key: 'food',
      title: 'Alimentação',
      render: () => <Image source={icons.food} style={{ width: CARD_SIZE * 0.46, height: CARD_SIZE * 0.46 }} resizeMode="contain" />,
    },
    {
      key: 'recarga',
      title: 'Recarga',
      render: () => <Image source={icons.recarga} style={{ width: CARD_SIZE * 0.56, height: CARD_SIZE * 0.46 }} resizeMode="contain" />,
    },
    {
      key: 'info',
      title: 'Informações',
      render: () => <Image source={icons.info} style={{ width: CARD_SIZE * 0.46, height: CARD_SIZE * 0.46 }} resizeMode="contain" />,
    },
  ],
];

const newsItems = [
  { title: 'Venda de carros elétricos aumenta no Brasil', image: require('@/assets/news/noticia_carro.png') },
  { title: 'Novos pontos de recarga chegam a mais cidades', image: require('@/assets/news/noticia_recarga.png') },
  { title: 'Baterias de longa duração chegam ao mercado', image: require('@/assets/news/noticia_bateria.png') },
  { title: 'Incentivos fiscais impulsionam adoção de EVs', image: require('@/assets/news/noticia_incentivo.png') },
];

export default function HomeScreen() {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  function handleCardPress(key: string, title: string) {
    setSelectedCard(key);
    router.push({ pathname: '/em-construcao', params: { title } });
  }

  function getCardColor(key: string) {
    return selectedCard === key ? FluiColors.primary : CARD_BG;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.greeting}>Bem-vinda de volta, Raíssa!</Text>

      <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>
          <Text style={styles.subtitleBold}>Shell Recharge</Text> está perto de você!
        </Text>
        <Text style={styles.time}>4 min</Text>
      </View>
      <View style={styles.divider} />

      {GRID_ROWS.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.gridRow}>
          {row.map((item) => (
            <IconCard
              key={item.key}
              size={CARD_SIZE}
              backgroundColor={getCardColor(item.key)}
              onPress={() => handleCardPress(item.key, item.title)}
            >
              {item.render()}
            </IconCard>
          ))}
        </View>
      ))}

      <Text style={styles.sectionTitle}>Novidades</Text>
      <View style={styles.divider} />

      {newsItems.map((item) => (
        <TouchableOpacity
          key={item.title}
          activeOpacity={0.85}
          style={styles.newsCard}
          onPress={() => handleCardPress(item.title, item.title)}
        >
          <Text style={styles.newsHeadline}>{item.title}</Text>
          <Image source={item.image} style={styles.newsImage} resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FluiColors.background,
  },
  content: {
    paddingHorizontal: H_PADDING,
    paddingTop: Spacing.xl + Spacing.md,
    paddingBottom: Spacing.xl + Spacing.sm,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  greeting: {
    color: FluiColors.text,
    fontSize: 17,
    fontFamily: FluiFonts.josefin.bold,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: Spacing.sm,
  },
  subtitleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    flexWrap: 'wrap',
  },
  subtitle: {
    color: FluiColors.text,
    fontSize: 17,
    fontFamily: FluiFonts.josefin.regular,
  },
  subtitleBold: {
    fontFamily: FluiFonts.josefin.bold,
  },
  time: {
    color: FluiColors.mutedText,
    fontSize: 15,
    fontFamily: FluiFonts.josefin.regular,
    marginLeft: Spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: DIVIDER_COLOR,
    marginTop: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  gridRow: {
    flexDirection: 'row',
    gap: GRID_GAP,
    marginBottom: GRID_GAP,
    marginLeft: 20,
  },
  sectionTitle: {
    color: FluiColors.text,
    fontSize: 17,
    fontFamily: FluiFonts.josefin.bold,
    marginTop: Spacing.sm,
  },
  newsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 19,
    overflow: 'hidden',
    marginBottom: Spacing.md,
    width: '100%',
  },
  newsHeadline: {
    color: FluiColors.inputText,
    fontFamily: FluiFonts.josefin.bold,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: Spacing.sm,
  },
  newsImage: {
    width: '100%',
    height: 170,
    borderRadius: 12,
  },
});