import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '../components/ui/Card';
import { Header } from '../components/ui/Header';
import { colors } from '../theme/colors';
import { mockPayments, mockTotalPaid } from '../data/mockData';

export const PaymentsScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState<'paid' | 'unpaid' | 'attach'>('paid');

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const PaymentItem = ({ payment, index }: any) => (
        <TouchableOpacity style={styles.paymentItem}>
            <View style={styles.paymentLeft}>
                <View style={[styles.timeline, index === 0 && styles.timelineFirst]}>
                    <View style={styles.timelineDot} />
                    {index !== mockPayments.length - 1 && <View style={styles.timelineLine} />}
                </View>
                <View style={styles.paymentInfo}>
                    <Text style={styles.paymentType}>{payment.type}</Text>
                    <Text style={styles.paymentDate}>Paid at {formatDate(payment.date)}</Text>
                </View>
            </View>
            <View style={styles.paymentRight}>
                <Text style={styles.paymentAmount}>{payment.amount}</Text>
                <Text style={styles.currency}>{payment.currency}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header
                title="Payments"
                leftIcon={<Text style={styles.iconText}>‹</Text>}
                onLeftPress={() => navigation.goBack()}
            />

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Total Paid Card */}
                <Card variant="elevated" style={styles.totalCard}>
                    <LinearGradient
                        colors={colors.gradients.success}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.totalGradient}
                    >
                        <Text style={styles.totalLabel}>Total Paid</Text>
                        <View style={styles.totalAmountContainer}>
                            <Text style={styles.totalAmount}>{mockTotalPaid}</Text>
                            <Text style={styles.totalCurrency}>Birr</Text>
                        </View>
                    </LinearGradient>
                </Card>

                {/* Tabs */}
                <View style={styles.tabs}>
                    <TouchableOpacity
                        onPress={() => setActiveTab('paid')}
                        style={[styles.tab, activeTab === 'paid' && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, activeTab === 'paid' && styles.activeTabText]}>
                            Paid
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('unpaid')}
                        style={[styles.tab, activeTab === 'unpaid' && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, activeTab === 'unpaid' && styles.activeTabText]}>
                            Unpaid
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('attach')}
                        style={[styles.tab, activeTab === 'attach' && styles.activeTab]}
                    >
                        <Text style={[styles.tabText, activeTab === 'attach' && styles.activeTabText]}>
                            Attach
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Payment History */}
                <Card style={styles.historyCard}>
                    <View style={styles.historyHeader}>
                        <Text style={styles.historyTitle}>Payment History</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAll}>See all ›</Text>
                        </TouchableOpacity>
                    </View>

                    {activeTab === 'paid' && (
                        <View style={styles.paymentList}>
                            {mockPayments.map((payment, index) => (
                                <PaymentItem key={payment.id} payment={payment} index={index} />
                            ))}
                        </View>
                    )}

                    {activeTab === 'unpaid' && (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyIcon}>✓</Text>
                            <Text style={styles.emptyText}>All payments are up to date!</Text>
                            <Text style={styles.emptySubtext}>You have no pending payments</Text>
                        </View>
                    )}

                    {activeTab === 'attach' && (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyIcon}>📎</Text>
                            <Text style={styles.emptyText}>No attachments</Text>
                            <Text style={styles.emptySubtext}>Payment receipts will appear here</Text>
                        </View>
                    )}
                </Card>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark.background,
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
    },
    iconText: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: '300',
    },
    totalCard: {
        padding: 0,
        overflow: 'hidden',
        marginBottom: 20,
    },
    totalGradient: {
        padding: 32,
        borderRadius: 16,
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 12,
    },
    totalAmountContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    totalAmount: {
        fontSize: 48,
        fontWeight: '800',
        color: '#ffffff',
    },
    totalCurrency: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.9)',
        marginLeft: 8,
    },
    tabs: {
        flexDirection: 'row',
        backgroundColor: colors.dark.surface,
        borderRadius: 12,
        padding: 4,
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: colors.primary[600],
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.dark.textSecondary,
    },
    activeTabText: {
        color: '#ffffff',
    },
    historyCard: {
        backgroundColor: colors.dark.surface,
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
    },
    seeAll: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.primary[400],
    },
    paymentList: {
        gap: 0,
    },
    paymentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    paymentLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeline: {
        width: 40,
        alignItems: 'center',
        position: 'relative',
    },
    timelineFirst: {
        paddingTop: 0,
    },
    timelineDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.success,
        zIndex: 1,
    },
    timelineLine: {
        position: 'absolute',
        width: 2,
        height: '100%',
        backgroundColor: colors.dark.border,
        top: 12,
        left: 19,
    },
    paymentInfo: {
        flex: 1,
    },
    paymentType: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.dark.text,
        marginBottom: 4,
    },
    paymentDate: {
        fontSize: 13,
        color: colors.dark.textSecondary,
    },
    paymentRight: {
        alignItems: 'flex-end',
        marginRight: 8,
    },
    paymentAmount: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 2,
    },
    currency: {
        fontSize: 12,
        color: colors.dark.textSecondary,
    },
    chevron: {
        fontSize: 24,
        color: colors.dark.textMuted,
        fontWeight: '300',
    },
    emptyState: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyIcon: {
        fontSize: 48,
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.dark.text,
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: colors.dark.textSecondary,
    },
});
