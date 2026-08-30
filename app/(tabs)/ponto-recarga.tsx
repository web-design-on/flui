import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import { ComponentProps, ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackButton } from '@/components/BackButton';
import { BorderRadius, FluiColors, FluiFonts, Spacing } from '@/constants/theme';
import { stationsMock } from '@/mocks/station';

const station = stationsMock[0];

export default function PontoRecargaScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerImage}>
          <Image
            accessibilityLabel="Foto do ponto de recarga"
            contentFit="cover"
            source={station.photo}
            style={styles.headerPhoto}
          />
          <BackButton />
          <View style={[styles.dotsRow, { top: insets.top + Spacing.md }]}>
            {[0, 1, 2].map((index) => (
              <View key={index} style={[styles.dot, index === 0 && styles.dotActive]} />
            ))}
          </View>
        </View>

        <View style={styles.statusBadgeWrap}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusBadgeText}>{station.statusLabel}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>{station.title}</Text>
          <View style={styles.locationRow}>
            <MaterialIcons color={FluiColors.mutedText} name="location-on" size={14} />
            <Text style={styles.locationText}>{station.location}</Text>
          </View>

          <View style={styles.metaRow}>
            <View style={styles.openDot} />
            <Text style={styles.metaText}>{station.isOpen ? 'Aberto' : 'Fechado'}</Text>
            <Text style={styles.metaSeparator}>•</Text>
            <Text style={styles.metaText}>Fecha {station.closesAt}</Text>
          </View>

          <Pressable style={styles.ratingRow}>
            <MaterialIcons color="#f5c518" name="star" size={16} />
            <Text style={styles.ratingText}>
              {station.rating} ({station.reviewsCount} avaliações)
            </Text>
            <MaterialIcons color={FluiColors.mutedText} name="chevron-right" size={18} />
          </Pressable>

          <View style={styles.actionsRow}>
            <ActionButton icon="directions" label="Rotas" />
            <ActionButton icon="favorite-border" label="Favoritar" />
            <ActionButton icon="share" label="Compartilhar" />
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoHeading}>Informações gerais</Text>

            <Text style={styles.infoLabel}>
              Quantidade de carregadores: <Text style={styles.infoValue}>{station.chargersCount}</Text>
            </Text>

            <InfoSection title="Tipos de carregador:">
              <InfoList
                items={station.connectorTypes.map(({ type, count }) => `${type} (${count})`)}
              />
            </InfoSection>

            <InfoSection title="Comodidades:">
              <InfoList items={station.amenities} />
            </InfoSection>

            <InfoSection title="Acessibilidade:">
              <InfoList items={station.accessibility} />
            </InfoSection>

            <InfoSection title="Pagamentos:" last>
              <InfoList items={station.paymentMethods} />
            </InfoSection>
          </View>

          <Text style={styles.sectionHeading}>Atualizações</Text>
          <UpdateCard />
          <UpdateCard />
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonLabel}>Ver mais atualizações de {station.name}</Text>
          </Pressable>

          <View style={styles.divider} />

          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeading}>Fotos</Text>
            <Pressable style={styles.addPhotoLink}>
              <MaterialIcons color={FluiColors.text} name="add" size={16} />
              <Text style={styles.addPhotoLinkText}>Adicionar uma foto</Text>
            </Pressable>
          </View>

          <View style={styles.photoGrid}>
            {[[0, 1], [2, 3]].map((row) => (
              <View key={row.join('-')} style={styles.photoRow}>
                {row.map((index) => (
                  <View key={index} style={styles.photoTile}>
                    <MaterialIcons color={FluiColors.primaryDark} name="add-a-photo" size={22} />
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 72 + insets.bottom }} />
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: insets.bottom || Spacing.sm }]}>
        <BottomBarItem icon="home" label="Home" />
        <BottomBarItem icon="search" label="Busca" />
        <BottomBarItem icon="person" label="Perfil" />
      </View>
    </View>
  );
}

function ActionButton({
  icon,
  label,
}: {
  icon: ComponentProps<typeof MaterialIcons>['name'];
  label: string;
}) {
  return (
    <Pressable style={styles.actionButton}>
      <MaterialIcons color={FluiColors.text} name={icon} size={16} />
      <Text style={styles.actionButtonLabel}>{label}</Text>
    </Pressable>
  );
}

function InfoSection({
  title,
  last,
  children,
}: {
  title: string;
  last?: boolean;
  children: ReactNode;
}) {
  return (
    <View style={[styles.infoSection, last && { marginBottom: 0 }]}>
      <Text style={styles.infoLabel}>{title}</Text>
      {children}
    </View>
  );
}

function InfoList({ items }: { items: string[] }) {
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <View key={item} style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function UpdateCard() {
  return (
    <View style={styles.updateCard}>
      <MaterialIcons color={FluiColors.primaryDark} name="add-a-photo" size={28} />
      <View style={styles.updateCardActions}>
        <Pressable style={styles.updateCardIconButton}>
          <MaterialIcons color={FluiColors.primaryDark} name="volume-up" size={16} />
        </Pressable>
        <Pressable style={styles.updateCardIconButton}>
          <MaterialIcons color={FluiColors.primaryDark} name="share" size={16} />
        </Pressable>
      </View>
    </View>
  );
}

function BottomBarItem({
  icon,
  label,
}: {
  icon: ComponentProps<typeof MaterialIcons>['name'];
  label: string;
}) {
  return (
    <View style={styles.bottomBarItem}>
      <MaterialIcons color={FluiColors.mutedText} name={icon} size={24} />
      <Text style={styles.bottomBarLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    backgroundColor: FluiColors.primaryDark,
    borderRadius: BorderRadius.button,
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  actionButtonLabel: {
    color: FluiColors.text,
    fontFamily: FluiFonts.inter.medium,
    fontSize: 12,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginTop: Spacing.md,
  },
  addPhotoLink: {
    alignItems: 'center',
    backgroundColor: FluiColors.primaryDark,
    borderRadius: BorderRadius.button,
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 6,
  },
  addPhotoLinkText: {
    color: FluiColors.text,
    fontFamily: FluiFonts.inter.medium,
    fontSize: 12,
  },
  body: {
    paddingHorizontal: 24,
  },
  bottomBar: {
    backgroundColor: FluiColors.background,
    borderTopColor: 'rgba(255,255,255,0.1)',
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    paddingTop: Spacing.sm,
    position: 'absolute',
    right: 0,
  },
  bottomBarItem: {
    alignItems: 'center',
    flex: 1,
    gap: 2,
  },
  bottomBarLabel: {
    color: FluiColors.mutedText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 11,
  },
  bullet: {
    backgroundColor: FluiColors.mutedText,
    borderRadius: 2,
    height: 4,
    marginTop: 7,
    width: 4,
  },
  divider: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 1,
    marginVertical: Spacing.lg,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 3,
    height: 6,
    width: 6,
  },
  dotActive: {
    backgroundColor: FluiColors.text,
  },
  dotsRow: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
    position: 'absolute',
  },
  headerImage: {
    height: 220,
    width: '100%',
  },
  headerPhoto: {
    height: '100%',
    width: '100%',
  },
  infoCard: {
    backgroundColor: FluiColors.card,
    borderRadius: 12,
    marginBottom: Spacing.lg,
    marginTop: Spacing.lg,
    padding: Spacing.md,
  },
  infoHeading: {
    color: FluiColors.text,
    fontFamily: FluiFonts.inter.semiBold,
    fontSize: 14,
    marginBottom: Spacing.sm,
  },
  infoLabel: {
    color: FluiColors.text,
    fontFamily: FluiFonts.inter.medium,
    fontSize: 12,
  },
  infoSection: {
    marginBottom: Spacing.sm,
    marginTop: Spacing.sm,
  },
  infoValue: {
    fontFamily: FluiFonts.inter.regular,
  },
  list: {
    gap: 4,
    marginTop: 4,
  },
  listItem: {
    flexDirection: 'row',
    gap: 8,
  },
  listText: {
    color: FluiColors.mutedText,
    flex: 1,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  locationRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginTop: 2,
  },
  locationText: {
    color: FluiColors.mutedText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 12,
  },
  metaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    marginTop: Spacing.sm,
  },
  metaSeparator: {
    color: FluiColors.mutedText,
    fontSize: 12,
  },
  metaText: {
    color: FluiColors.mutedText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 12,
  },
  openDot: {
    backgroundColor: FluiColors.success,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  photoGrid: {
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  photoRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  photoTile: {
    alignItems: 'center',
    backgroundColor: FluiColors.placeholder,
    borderRadius: 10,
    flex: 1,
    height: 110,
    justifyContent: 'center',
  },
  ratingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    marginTop: Spacing.sm,
  },
  ratingText: {
    color: FluiColors.text,
    flex: 1,
    fontFamily: FluiFonts.inter.medium,
    fontSize: 13,
  },
  root: {
    backgroundColor: FluiColors.background,
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Spacing.lg,
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: FluiColors.primary,
    borderRadius: BorderRadius.button,
    marginTop: Spacing.sm,
    paddingVertical: Spacing.sm,
  },
  secondaryButtonLabel: {
    color: FluiColors.text,
    fontFamily: FluiFonts.inter.semiBold,
    fontSize: 13,
  },
  sectionHeaderRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeading: {
    color: FluiColors.text,
    fontFamily: FluiFonts.inter.semiBold,
    fontSize: 15,
    marginBottom: Spacing.sm,
  },
  statusBadge: {
    backgroundColor: FluiColors.success,
    borderRadius: BorderRadius.button,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
  },
  statusBadgeText: {
    color: '#123b23',
    fontFamily: FluiFonts.inter.semiBold,
    fontSize: 11,
  },
  statusBadgeWrap: {
    alignItems: 'center',
    marginTop: -14,
    zIndex: 2,
  },
  title: {
    color: FluiColors.text,
    fontFamily: FluiFonts.josefin.bold,
    fontSize: 18,
    marginTop: Spacing.md,
  },
  updateCard: {
    alignItems: 'center',
    backgroundColor: FluiColors.placeholder,
    borderRadius: 12,
    height: 140,
    justifyContent: 'center',
    marginBottom: Spacing.sm,
    width: '100%',
  },
  updateCardActions: {
    bottom: Spacing.sm,
    flexDirection: 'row',
    gap: Spacing.sm,
    position: 'absolute',
    right: Spacing.sm,
  },
  updateCardIconButton: {
    alignItems: 'center',
    backgroundColor: FluiColors.text,
    borderColor: FluiColors.primaryDark,
    borderRadius: 14,
    borderWidth: 1,
    height: 28,
    justifyContent: 'center',
    width: 28,
  },
});
