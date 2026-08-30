import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    backgroundColor: string;
    onPress: () => void;
    children: React.ReactNode;
    size?: number;
};

export default function IconCard({ backgroundColor, onPress, children, size = 96 }: Props) {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={onPress}
            style={[
                styles.card,
                { backgroundColor, width: size, height: size, borderRadius: size * 0.28 },
            ]}
        >
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: { alignItems: 'center', justifyContent: 'center' },
});