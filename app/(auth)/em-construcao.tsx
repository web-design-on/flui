import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { FluiColors, FluiFonts, Spacing, BorderRadius } from '@/constants/theme';

    export default function EmConstrucaoScreen() {
        const { title } = useLocalSearchParams<{ title?: string }>();

        return (
            <View style={styles.container}>
                <View style={styles.iconCircle}>
                    <Ionicons name="construct" size={48} color={FluiColors.inputText} />
                </View>
                <Text style={styles.title}>{title ?? 'Essa área'}</Text>
                <Text style={styles.subtitle}>Essa tela ainda está em construção 🚧{'\n'}Volte em breve!</Text>
                <TouchableOpacity style={styles.button} onPress={() => router.replace('/home')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }

const CARD_BG = '#f2f2f2';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: FluiColors.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Spacing.lg + Spacing.sm,
    },
    iconCircle: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: CARD_BG,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: Spacing.lg,
    },
    title: {
        color: FluiColors.text,
        fontSize: 22,
        fontFamily: FluiFonts.josefin.bold,
        marginBottom: Spacing.sm,
        textAlign: 'center',
    },
    subtitle: {
        color: FluiColors.mutedText,
        fontSize: 14,
        fontFamily: FluiFonts.josefin.regular,
        textAlign: 'center',
        lineHeight: 20,
    },
    button: {
        marginTop: Spacing.lg + Spacing.xs,
        backgroundColor: FluiColors.primary,
        paddingVertical: Spacing.sm + 4,
        paddingHorizontal: Spacing.lg + 4,
        borderRadius: BorderRadius.button,
    },
    buttonText: {
        color: FluiColors.inputText,
        fontFamily: FluiFonts.josefin.bold,
        fontSize: 15,
    },
});