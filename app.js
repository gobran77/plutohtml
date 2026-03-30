const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menuBtn');
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const dashboardCurrencyTabs = document.getElementById('dashboardCurrencyTabs');
const actionButtons = document.querySelectorAll('.action-btn');
const topNotificationsBtn = document.getElementById('topNotificationsBtn');
const submitAddBtn = document.getElementById('submitAddBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const openCustomerModalBtn = document.getElementById('openCustomerModalBtn');
const submitCustomerBtn = document.getElementById('submitCustomerBtn');
const customersList = document.getElementById('customersList');
const customersEmptyState = document.getElementById('customersEmptyState');
const customerSearchInput = document.getElementById('customerSearchInput');
const customerModalTitle = document.getElementById('customerModalTitle');
const openSubscriptionModalBtn = document.getElementById('openSubscriptionModalBtn');
const exportSubscriptionsBtn = document.getElementById('exportSubscriptionsBtn');
const openServiceModalBtn = document.getElementById('openServiceModalBtn');
const submitServiceBtn = document.getElementById('submitServiceBtn');
const servicesList = document.getElementById('servicesList');
const servicesEmptyState = document.getElementById('servicesEmptyState');
const servicesOverview = document.getElementById('servicesOverview');
const serviceDetailPage = document.getElementById('serviceDetailPage');
const backToServicesBtn = document.getElementById('backToServicesBtn');
const serviceDetailName = document.getElementById('serviceDetailName');
const serviceDetailMeta = document.getElementById('serviceDetailMeta');
const toggleServiceEntryFormBtn = document.getElementById('toggleServiceEntryFormBtn');
const serviceEntryForm = document.getElementById('serviceEntryForm');
const serviceEntryEmail = document.getElementById('serviceEntryEmail');
const serviceEntryPassword = document.getElementById('serviceEntryPassword');
const serviceEntryPasswordGroup = document.getElementById('serviceEntryPasswordGroup');
const saveServiceEntryBtn = document.getElementById('saveServiceEntryBtn');
const serviceEntrySearchInput = document.getElementById('serviceEntrySearchInput');
const serviceEntriesList = document.getElementById('serviceEntriesList');
const serviceLinkedCustomers = document.getElementById('serviceLinkedCustomers');
const serviceLinkedCustomersTitle = document.getElementById('serviceLinkedCustomersTitle');
const serviceLinkedCustomersList = document.getElementById('serviceLinkedCustomersList');
const sharedUsersModalTitle = document.getElementById('sharedUsersModalTitle');
const sharedUsersModalEmail = document.getElementById('sharedUsersModalEmail');
const sharedUsersList = document.getElementById('sharedUsersList');
const sharedCustomerSelect = document.getElementById('sharedCustomerSelect');
const addSharedUserBtn = document.getElementById('addSharedUserBtn');
const subscriptionsTableBody = document.getElementById('subscriptionsTableBody');
const subscriptionsEmptyState = document.getElementById('subscriptionsEmptyState');
const subscriptionsActiveCount = document.getElementById('subscriptionsActiveCount');
const subscriptionsEndingCount = document.getElementById('subscriptionsEndingCount');
const subscriptionsExpiredCount = document.getElementById('subscriptionsExpiredCount');
const subscriptionsPartialCount = document.getElementById('subscriptionsPartialCount');
const subscriptionsDebtValue = document.getElementById('subscriptionsDebtValue');
const paymentsTotalDebt = document.getElementById('paymentsTotalDebt');
const paymentsDebtorsCount = document.getElementById('paymentsDebtorsCount');
const paymentsCollectedTotal = document.getElementById('paymentsCollectedTotal');
const paymentsTransactionsCount = document.getElementById('paymentsTransactionsCount');
const paymentsGrandTotal = document.getElementById('paymentsGrandTotal');
const paymentsCurrencySummary = document.getElementById('paymentsCurrencySummary');
const paymentsCurrencyTabs = document.getElementById('paymentsCurrencyTabs');
const paymentsDebtCustomer = document.getElementById('paymentsDebtCustomer');
const paymentsDebtAmount = document.getElementById('paymentsDebtAmount');
const paymentsDebtCurrency = document.getElementById('paymentsDebtCurrency');
const paymentsDebtNote = document.getElementById('paymentsDebtNote');
const paymentsAddDebtBtn = document.getElementById('paymentsAddDebtBtn');
const paymentsPayCustomer = document.getElementById('paymentsPayCustomer');
const paymentsPayAmount = document.getElementById('paymentsPayAmount');
const paymentsPayCurrency = document.getElementById('paymentsPayCurrency');
const paymentsPayMethod = document.getElementById('paymentsPayMethod');
const paymentsPayNote = document.getElementById('paymentsPayNote');
const paymentsSubmitBtn = document.getElementById('paymentsSubmitBtn');
const paymentsSearchInput = document.getElementById('paymentsSearchInput');
const paymentsCustomersList = document.getElementById('paymentsCustomersList');
const paymentsHistoryList = document.getElementById('paymentsHistoryList');
const paymentsCurrencyReport = document.getElementById('paymentsCurrencyReport');
const paymentsMethodsGrid = document.getElementById('paymentsMethodsGrid');
const paymentsFilterTabs = document.getElementById('paymentsFilterTabs');
const paymentsExportBtn = document.getElementById('paymentsExportBtn');
const openPaymentEntryBtn = document.getElementById('openPaymentEntryBtn');
const paymentsInvoiceSelect = document.getElementById('paymentsInvoiceSelect');
const paymentsModalCustomer = document.getElementById('paymentsModalCustomer');
const paymentsModalMethod = document.getElementById('paymentsModalMethod');
const paymentsModalAmount = document.getElementById('paymentsModalAmount');
const paymentsModalDate = document.getElementById('paymentsModalDate');
const paymentsModalCurrency = document.getElementById('paymentsModalCurrency');
const paymentsModalReference = document.getElementById('paymentsModalReference');
const paymentsModalNote = document.getElementById('paymentsModalNote');
const paymentsModalSubmitBtn = document.getElementById('paymentsModalSubmitBtn');
const paymentsInvoiceFields = document.getElementById('paymentsInvoiceFields');
const paymentsCustomerFields = document.getElementById('paymentsCustomerFields');
const paymentsMethodField = document.getElementById('paymentsMethodField');
const paymentEntryTypeButtons = document.querySelectorAll('[data-payment-entry-type]');
const subscriptionFilterTabs = document.querySelectorAll('[data-subscription-filter]');
const invoicesSearchInput = document.getElementById('invoicesSearchInput');
const invoicesList = document.getElementById('invoicesList');
const invoicePreviewCard = document.getElementById('invoicePreviewCard');
const invoicePreviewEmpty = document.getElementById('invoicePreviewEmpty');
const invoicePreviewContent = document.getElementById('invoicePreviewContent');
const invoiceTitle = document.getElementById('invoiceTitle');
const invoiceMeta = document.getElementById('invoiceMeta');
const invoiceCustomerName = document.getElementById('invoiceCustomerName');
const invoiceTotalAmount = document.getElementById('invoiceTotalAmount');
const invoicePaidAmount = document.getElementById('invoicePaidAmount');
const invoiceRemainingAmount = document.getElementById('invoiceRemainingAmount');
const invoiceServicesList = document.getElementById('invoiceServicesList');
const invoiceDetailsGrid = document.getElementById('invoiceDetailsGrid');
const invoiceCopyBtn = document.getElementById('invoiceCopyBtn');
const invoicePrintBtn = document.getElementById('invoicePrintBtn');
const invoiceDeleteBtn = document.getElementById('invoiceDeleteBtn');
const subscriptionModalTitle = document.getElementById('subscriptionModalTitle');
const subscriptionCustomerSearch = document.getElementById('subscriptionCustomerSearch');
const subscriptionCustomerSelect = document.getElementById('subscriptionCustomerSelect');
const subscriptionDuration = document.getElementById('subscriptionDuration');
const subscriptionCurrency = document.getElementById('subscriptionCurrency');
const settingsDefaultCurrency = document.getElementById('settingsDefaultCurrency');
const settingsCurrencySymbol = document.getElementById('settingsCurrencySymbol');
const settingsCurrencyName = document.getElementById('settingsCurrencyName');
const settingsCurrencyRate = document.getElementById('settingsCurrencyRate');
const settingsAddCurrencyBtn = document.getElementById('settingsAddCurrencyBtn');
const settingsCurrenciesList = document.getElementById('settingsCurrenciesList');
const reportsRangeTabs = document.getElementById('reportsRangeTabs');
const reportsCustomRange = document.getElementById('reportsCustomRange');
const reportsDateFrom = document.getElementById('reportsDateFrom');
const reportsDateTo = document.getElementById('reportsDateTo');
const reportsApplyBtn = document.getElementById('reportsApplyBtn');
const reportsPeriodNote = document.getElementById('reportsPeriodNote');
const reportsRevenue = document.getElementById('reportsRevenue');
const reportsCosts = document.getElementById('reportsCosts');
const reportsProfit = document.getElementById('reportsProfit');
const reportsCollected = document.getElementById('reportsCollected');
const reportsSubscriptionsCount = document.getElementById('reportsSubscriptionsCount');
const reportsServicesCount = document.getElementById('reportsServicesCount');
const reportsCustomersCount = document.getElementById('reportsCustomersCount');
const reportsDebtAdded = document.getElementById('reportsDebtAdded');
const reportsSummaryList = document.getElementById('reportsSummaryList');
const reportsMethodsList = document.getElementById('reportsMethodsList');
const reportsServicesList = document.getElementById('reportsServicesList');
const reportsActivityList = document.getElementById('reportsActivityList');
const subscriptionType = document.getElementById('subscriptionType');
const subscriptionEmailGroup = document.getElementById('subscriptionEmailGroup');
const subscriptionPrivateEmail = document.getElementById('subscriptionPrivateEmail');
const addSubscriptionServiceBtn = document.getElementById('addSubscriptionServiceBtn');
const subscriptionServiceRows = document.getElementById('subscriptionServiceRows');
const subscriptionDiscount = document.getElementById('subscriptionDiscount');
const subscriptionTotalPrice = document.getElementById('subscriptionTotalPrice');
const subscriptionFinalPrice = document.getElementById('subscriptionFinalPrice');
const subscriptionTotalCost = document.getElementById('subscriptionTotalCost');
const subscriptionExpectedProfit = document.getElementById('subscriptionExpectedProfit');
const subscriptionStartDate = document.getElementById('subscriptionStartDate');
const subscriptionEndDate = document.getElementById('subscriptionEndDate');
const subscriptionAutoRenew = document.getElementById('subscriptionAutoRenew');
const submitSubscriptionBtn = document.getElementById('submitSubscriptionBtn');
const paymentStatusButtons = document.querySelectorAll('[data-payment-status]');
const paymentMethodButtons = document.querySelectorAll('[data-payment-method]');
const subscriptionMethodGroup = document.getElementById('subscriptionMethodGroup');
const subscriptionDueSettings = document.getElementById('subscriptionDueSettings');
const subscriptionDueOptionButtons = document.querySelectorAll('[data-due-option]');
const subscriptionCustomDueDateGroup = document.getElementById('subscriptionCustomDueDateGroup');
const subscriptionCustomDueDate = document.getElementById('subscriptionCustomDueDate');
const dashboardOverdueList = document.getElementById('dashboardOverdueList');
const dashboardRenewalsList = document.getElementById('dashboardRenewalsList');
const dashboardRenewalsCount = document.getElementById('dashboardRenewalsCount');
const servicesCountLabel = document.getElementById('servicesCountLabel');
const serviceTabs = document.querySelectorAll('.service-tab');
const serviceCategory = document.getElementById('serviceCategory');
const serviceName = document.getElementById('serviceName');
const serviceDuration = document.getElementById('serviceDuration');
const servicePricingMode = document.getElementById('servicePricingMode');
const serviceEndDate = document.getElementById('serviceEndDate');
const servicePrice = document.getElementById('servicePrice');
const serviceCurrency = document.getElementById('serviceCurrency');
const serviceModalTitle = document.getElementById('serviceModalTitle');
const serviceCustomDateGroup = document.getElementById('serviceCustomDateGroup');
const serviceTypeCards = document.querySelectorAll('[data-service-type-card]');
const servicePricingRows = document.querySelectorAll('[data-duration-row]');
const serviceSellPriceInputs = document.querySelectorAll('[data-price-kind="sell"]');
const serviceCostPriceInputs = document.querySelectorAll('[data-price-kind="cost"]');

const defaultCurrencies = [
    { symbol: 'ر.س', name: 'ريال سعودي', rate: 1 },
    { symbol: 'د.إ', name: 'درهم إماراتي', rate: 0.98 },
    { symbol: '$', name: 'دولار أمريكي', rate: 0.27 },
    { symbol: 'ر.ي', name: 'ريال يمني', rate: 0.07 }
];
const BASE_CURRENCY = 'ر.س';

const appState = {
    currency: 'ر.س',
    currencies: defaultCurrencies.map((currency) => ({ ...currency })),
    items: [],
    customerRecords: [],
    serviceRecords: [],
    subscriptionRecords: [],
    editingCustomerId: null,
    editingServiceId: null,
    editingSubscriptionId: null,
    customerSequence: 0,
    activeInvoiceId: null,
    activeServiceType: 'private',
    activeServiceId: null,
    activeSharedEmailId: null,
    activeSharedUsersEntryId: null,
    activeSubscriptionFilter: 'all',
    activePaymentsFilter: 'all',
    activePaymentEntryType: 'invoice',
    activePaymentsCurrency: 'ر.س',
    activeDashboardCurrency: 'ر.س',
    activeReportsRange: 'today',
    subscriptionPaymentStatus: 'paid',
    subscriptionPaymentMethod: 'ون كاش',
    subscriptionDueOption: '1',
    totals: {
        revenue: 0,
        profit: 0,
        subscriptions: 0,
        expiring: 0,
        customers: 0,
        services: 0,
        balance: 0,
        income: 0,
        expenses: 0
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadAppState();
    setupEventListeners();
    syncCurrencyInterfaces();
    syncServiceTabs();
    setActivePage('dashboard');
    syncTotals();
    renderDashboard();
    renderCustomers();
    renderServices();
    renderSubscriptions();
    renderPayments();
    renderInvoices();
    renderReports();
    showToast('تم تجهيز الواجهة بدون بيانات تجريبية.', 'جاهز', 'success');
}

function setupEventListeners() {
    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);

    navItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            setActivePage(item.dataset.page);
            closeSidebar();
        });
    });

    dashboardCurrencyTabs?.addEventListener('click', (event) => {
        const tab = event.target.closest('.filter-tab');
        if (!tab) {
            return;
        }

        const selectedCurrency = tab.dataset.currencySymbol || tab.textContent.trim();
        if (selectedCurrency === 'الكل') {
            return;
        }

        appState.activeDashboardCurrency = selectedCurrency;
        saveAppState();
        renderDashboard();
    });

    actionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;

            if (action === 'refresh') {
                handleRefresh(button);
            }

            if (action === 'add') {
                openModal('addModal');
            }

            if (action === 'delete') {
                openModal('deleteModal');
            }

            if (action === 'notifications') {
                openModal('notificationsModal');
            }
        });

        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = '';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });

    topNotificationsBtn.addEventListener('click', () => openModal('notificationsModal'));
    submitAddBtn.addEventListener('click', submitAddItem);
    confirmDeleteBtn.addEventListener('click', confirmDelete);
    openCustomerModalBtn.addEventListener('click', openCustomerModalForCreate);
    submitCustomerBtn.addEventListener('click', submitCustomer);
    customerSearchInput.addEventListener('input', renderCustomers);
    openSubscriptionModalBtn?.addEventListener('click', openSubscriptionModalForCreate);
    exportSubscriptionsBtn?.addEventListener('click', exportSubscriptionsCsv);
    openServiceModalBtn.addEventListener('click', openServiceModalForCreate);
    submitServiceBtn.addEventListener('click', submitService);
    submitSubscriptionBtn?.addEventListener('click', submitSubscription);
    settingsDefaultCurrency?.addEventListener('change', () => {
        setPrimaryCurrency(settingsDefaultCurrency.value);
    });
    settingsAddCurrencyBtn?.addEventListener('click', addCustomCurrency);
    paymentsAddDebtBtn?.addEventListener('click', addManualDebt);
    paymentsSubmitBtn?.addEventListener('click', submitCustomerPayment);
    paymentsSearchInput?.addEventListener('input', renderPayments);
    paymentsCurrencyTabs?.addEventListener('click', (event) => {
        const button = event.target.closest('[data-payments-currency]');
        if (!button) {
            return;
        }
        appState.activePaymentsCurrency = button.dataset.paymentsCurrency;
        saveAppState();
        renderPayments();
    });
    openPaymentEntryBtn?.addEventListener('click', openPaymentsModal);
    paymentsModalSubmitBtn?.addEventListener('click', submitPaymentsModal);
    paymentsInvoiceSelect?.addEventListener('change', syncPaymentsModalFromInvoice);
    paymentsExportBtn?.addEventListener('click', exportPaymentsCsv);
    reportsRangeTabs?.addEventListener('click', (event) => {
        const button = event.target.closest('[data-report-range]');
        if (!button) {
            return;
        }
        appState.activeReportsRange = button.dataset.reportRange;
        renderReports();
        saveAppState();
    });
    reportsApplyBtn?.addEventListener('click', () => {
        appState.activeReportsRange = 'custom';
        renderReports();
        saveAppState();
    });
    paymentEntryTypeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            appState.activePaymentEntryType = button.dataset.paymentEntryType;
            syncPaymentsEntryTypeUi();
        });
    });
    invoicesSearchInput?.addEventListener('input', renderInvoices);
    invoiceCopyBtn?.addEventListener('click', copyActiveInvoice);
    invoicePrintBtn?.addEventListener('click', printActiveInvoice);
    invoiceDeleteBtn?.addEventListener('click', deleteActiveInvoice);

    serviceTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            serviceTabs.forEach((item) => item.classList.remove('active'));
            tab.classList.add('active');
            appState.activeServiceType = tab.dataset.serviceType;
            saveAppState();
            renderServices();
        });
    });

    serviceTypeCards.forEach((card) => {
        card.addEventListener('click', () => {
            syncServiceTypeSelection(card.dataset.serviceTypeCard);
        });
    });

    servicePricingRows.forEach((row) => {
        row.addEventListener('click', () => {
            syncSelectedPricingRow(row.dataset.durationRow);
        });
    });

    [...serviceSellPriceInputs, ...serviceCostPriceInputs].forEach((input) => {
        input.addEventListener('click', (event) => event.stopPropagation());
        input.addEventListener('input', () => {
            syncPricingInputs();
        });
    });

    servicePricingMode.addEventListener('change', updateServiceDateVisibility);
    subscriptionType?.addEventListener('change', () => {
        updateSubscriptionTypeVisibility();
        syncSubscriptionServiceAvailability();
    });
    subscriptionDuration?.addEventListener('change', () => {
        syncSubscriptionServicePrices();
        updateSubscriptionDates();
    });
    subscriptionCurrency?.addEventListener('change', updateSubscriptionSummary);
    subscriptionCustomerSearch?.addEventListener('input', populateSubscriptionCustomerOptions);
    subscriptionDiscount?.addEventListener('input', updateSubscriptionSummary);
    addSubscriptionServiceBtn?.addEventListener('click', () => addSubscriptionServiceRow());
    subscriptionStartDate?.addEventListener('change', updateSubscriptionDates);
    backToServicesBtn.addEventListener('click', closeServiceDetailsPage);
    toggleServiceEntryFormBtn.addEventListener('click', toggleServiceEntryForm);
    saveServiceEntryBtn.addEventListener('click', saveInlineServiceEntry);
    serviceEntrySearchInput.addEventListener('input', renderActiveServiceEntries);
    addSharedUserBtn?.addEventListener('click', addCustomerToSharedEntry);

    subscriptionFilterTabs.forEach((button) => {
        button.addEventListener('click', () => {
            appState.activeSubscriptionFilter = button.dataset.subscriptionFilter;
            subscriptionFilterTabs.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            renderSubscriptions();
        });
    });

    paymentStatusButtons.forEach((button) => {
        button.addEventListener('click', () => {
            appState.subscriptionPaymentStatus = button.dataset.paymentStatus;
            syncSubscriptionChoiceButtons();
        });
    });

    paymentMethodButtons.forEach((button) => {
        button.addEventListener('click', () => {
            appState.subscriptionPaymentMethod = button.dataset.paymentMethod;
            syncSubscriptionChoiceButtons();
        });
    });

    subscriptionDueOptionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            appState.subscriptionDueOption = button.dataset.dueOption;
            syncSubscriptionChoiceButtons();
        });
    });

    subscriptionCustomDueDate?.addEventListener('change', syncSubscriptionChoiceButtons);

    document.querySelectorAll('[data-close-modal]').forEach((element) => {
        element.addEventListener('click', () => {
            closeModal(element.dataset.closeModal);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeSidebar();
            document.querySelectorAll('.modal.active').forEach((modal) => modal.classList.remove('active'));
            document.body.style.overflow = 'auto';
        }

        if (event.altKey && event.key.toLowerCase() === 'n') {
            openModal('addModal');
        }

        if (event.altKey && event.key.toLowerCase() === 'r') {
            handleRefresh(document.querySelector('[data-action="refresh"]'));
        }
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.service-entry-menu.show').forEach((menu) => menu.classList.remove('show'));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });

    setupTouchSupport();
    setupCardEffects();
    setupFocusEffects();
    setupLoadAnimations();
}

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function normalizeCurrencies(currencies) {
    const source = Array.isArray(currencies) && currencies.length ? currencies : defaultCurrencies;
    const normalized = source
        .map((currency) => ({
            symbol: String(currency?.symbol || '').trim(),
            name: String(currency?.name || currency?.symbol || '').trim(),
            rate: Number(currency?.rate || 1)
        }))
        .filter((currency) => currency.symbol && currency.name && currency.rate > 0);

    const unique = [];
    const seen = new Set();
    normalized.forEach((currency) => {
        if (!seen.has(currency.symbol)) {
            seen.add(currency.symbol);
            unique.push(currency);
        }
    });

    return unique.length ? unique : defaultCurrencies.map((currency) => ({ ...currency }));
}

function getCurrencyBySymbol(symbol) {
    return appState.currencies.find((currency) => currency.symbol === symbol) || appState.currencies[0] || defaultCurrencies[0];
}

function getCurrencyRate(symbol) {
    return getCurrencyBySymbol(symbol)?.rate || 1;
}

function getCurrencyName(symbol) {
    return getCurrencyBySymbol(symbol)?.name || symbol;
}

function syncCurrencyInterfaces() {
    appState.currencies = normalizeCurrencies(appState.currencies);

    if (!appState.currencies.some((currency) => currency.symbol === appState.currency)) {
        appState.currency = appState.currencies[0].symbol;
    }
    if (!appState.currencies.some((currency) => currency.symbol === appState.activeDashboardCurrency)) {
        appState.activeDashboardCurrency = appState.currency;
    }
    if (!appState.currencies.some((currency) => currency.symbol === appState.activePaymentsCurrency)) {
        appState.activePaymentsCurrency = appState.currency;
    }

    renderDashboardCurrencyTabs();
    renderPaymentsCurrencyTabs();
    populateCurrencySelect(serviceCurrency, serviceCurrency?.value || appState.currency);
    populateCurrencySelect(subscriptionCurrency, subscriptionCurrency?.value || appState.currency);
    populateCurrencySelect(settingsDefaultCurrency, appState.currency);
    populateCurrencySelect(paymentsDebtCurrency, paymentsDebtCurrency?.value || appState.currency);
    populateCurrencySelect(paymentsPayCurrency, paymentsPayCurrency?.value || appState.currency);
    renderSettingsCurrencies();
}

function populateCurrencySelect(selectElement, selectedSymbol) {
    if (!selectElement) {
        return;
    }

    selectElement.innerHTML = appState.currencies
        .map((currency) => `<option value="${currency.symbol}">${currency.symbol} - ${currency.name}</option>`)
        .join('');

    selectElement.value = appState.currencies.some((currency) => currency.symbol === selectedSymbol)
        ? selectedSymbol
        : appState.currencies[0]?.symbol || '';
}

function renderDashboardCurrencyTabs() {
    if (!dashboardCurrencyTabs) {
        return;
    }

    dashboardCurrencyTabs.innerHTML = `
        <button class="filter-tab" type="button">الكل</button>
        ${appState.currencies.map((currency) => `
            <button
                class="filter-tab ${currency.symbol === appState.activeDashboardCurrency ? 'active' : ''}"
                type="button"
                data-currency-symbol="${currency.symbol}"
            >
                ${currency.symbol}
            </button>
        `).join('')}
    `;
}

function renderPaymentsCurrencyTabs() {
    if (!paymentsCurrencyTabs) {
        return;
    }

    paymentsCurrencyTabs.innerHTML = appState.currencies.map((currency) => `
        <button
            class="payments-currency-tab ${currency.symbol === appState.activePaymentsCurrency ? 'active' : ''}"
            type="button"
            data-payments-currency="${currency.symbol}"
        >
            ${currency.symbol}
        </button>
    `).join('');
}

function renderSettingsCurrencies() {
    if (!settingsCurrenciesList) {
        return;
    }

    settingsCurrenciesList.innerHTML = appState.currencies.map((currency) => `
        <div class="settings-currency-item">
            <div class="settings-currency-symbol">${currency.symbol}</div>
            <div class="settings-currency-name">${currency.name}</div>
            <div class="settings-currency-meta">معامل التحويل: ${currency.rate}</div>
        </div>
    `).join('');
}

function setPrimaryCurrency(symbol) {
    if (!appState.currencies.some((currency) => currency.symbol === symbol)) {
        return;
    }

    appState.currency = symbol;
    syncCurrencyInterfaces();
    saveAppState();
    renderDashboard();
    renderServices();
    renderSubscriptions();
    renderPayments();
}

function addCustomCurrency() {
    const symbol = settingsCurrencySymbol?.value.trim();
    const name = settingsCurrencyName?.value.trim();
    const rate = Number(settingsCurrencyRate?.value || 0);

    if (!symbol || !name || rate <= 0) {
        showToast('أدخل رمز العملة واسمها ومعامل تحويل صحيح.', 'خطأ', 'error');
        return;
    }

    if (appState.currencies.some((currency) => currency.symbol === symbol)) {
        showToast('رمز العملة موجود بالفعل.', 'تنبيه', 'warning');
        return;
    }

    appState.currencies.push({ symbol, name, rate });
    appState.currency = symbol;
    syncCurrencyInterfaces();
    saveAppState();
    renderDashboard();
    renderServices();
    renderSubscriptions();
    renderPayments();

    settingsCurrencySymbol.value = '';
    settingsCurrencyName.value = '';
    settingsCurrencyRate.value = '1';
    showToast(`تمت إضافة العملة "${name}".`, 'الإعدادات', 'success');
}

function convertCurrencyAmount(amount, fromCurrency, toCurrency = appState.currency) {
    const sourceRate = getCurrencyRate(fromCurrency || appState.currency);
    const targetRate = getCurrencyRate(toCurrency || appState.currency);
    if (!sourceRate || !targetRate) {
        return Number(amount || 0);
    }
    return (Number(amount || 0) / sourceRate) * targetRate;
}

function convertToBaseCurrency(amount, currency) {
    return convertCurrencyAmount(amount, currency || appState.currency, BASE_CURRENCY);
}

function normalizeCustomerFinancials(customer) {
    customer.manualDebtBalance = Number(customer.manualDebtBalance || 0);
    customer.paymentHistory = Array.isArray(customer.paymentHistory) ? customer.paymentHistory : [];
}

function getPaymentStatusFromOutstanding(outstandingAmount, totalAmount) {
    const outstanding = Math.max(Number(outstandingAmount || 0), 0);
    const total = Math.max(Number(totalAmount || 0), 0);
    if (outstanding <= 0) {
        return 'paid';
    }
    if (outstanding >= total) {
        return 'due';
    }
    return 'partial';
}

function normalizeSubscriptionFinancials(subscription) {
    subscription.currency = subscription.currency || appState.currency;
    subscription.invoiceNumber = subscription.invoiceNumber || `INV-${String(subscription.id || Date.now()).slice(-6)}-${Math.floor(100 + (Number(subscription.customerId || 0) % 900))}`;
    subscription.dueOption = subscription.dueOption || '';
    subscription.dueDate = subscription.dueDate || '';
    subscription.finalPrice = Number(subscription.finalPrice || 0);
    subscription.totalPrice = Number(subscription.totalPrice || subscription.finalPrice || 0);
    subscription.paidAmount = Number(
        subscription.paidAmount ?? (
            subscription.paymentStatus === 'paid'
                ? subscription.finalPrice
                : 0
        )
    );
    subscription.outstandingAmount = Math.max(
        Number(subscription.outstandingAmount ?? (subscription.finalPrice - subscription.paidAmount)),
        0
    );
    subscription.paymentStatus = getPaymentStatusFromOutstanding(subscription.outstandingAmount, subscription.finalPrice);
}

function getCustomerSubscriptions(customerId) {
    return (appState.subscriptionRecords || []).filter((subscription) => subscription.customerId === customerId);
}

function getPaymentEntryBaseAmount(entry) {
    if (entry?.baseAmount != null) {
        return Number(entry.baseAmount || 0);
    }
    return convertToBaseCurrency(entry?.amount || 0, entry?.currency || appState.currency);
}

function getPaymentEntryManualAppliedBase(entry) {
    if (entry?.manualAppliedBase != null) {
        return Number(entry.manualAppliedBase || 0);
    }
    if (entry?.manualApplied != null) {
        return convertToBaseCurrency(entry.manualApplied || 0, entry.settlementCurrency || appState.currency);
    }
    return 0;
}

function getCustomerManualDebtBase(customer) {
    normalizeCustomerFinancials(customer);
    return customer.paymentHistory.reduce((sum, entry) => {
        if (entry.type === 'debt') {
            return sum + getPaymentEntryBaseAmount(entry);
        }
        return sum - getPaymentEntryManualAppliedBase(entry);
    }, 0);
}

function getCustomerManualDebt(customer) {
    return convertCurrencyAmount(getCustomerManualDebtBase(customer), BASE_CURRENCY, appState.currency);
}

function reconcileCustomerFinancials(customer) {
    normalizeCustomerFinancials(customer);
    customer.paymentHistory = customer.paymentHistory.filter((entry) => {
        if (entry.type !== 'payment' || !entry.invoiceId) {
            return true;
        }

        const hasLinkedSubscription = (appState.subscriptionRecords || []).some((subscription) => Number(subscription.id) === Number(entry.invoiceId));
        const manualAppliedBase = getPaymentEntryManualAppliedBase(entry);
        return hasLinkedSubscription || manualAppliedBase > 0;
    });
    customer.manualDebtBalance = getCustomerManualDebtBase(customer);
}

function reconcileAllCustomerFinancials() {
    (appState.customerRecords || []).forEach((customer) => {
        reconcileCustomerFinancials(customer);
    });
}

function getAppliedAmountForSubscription(entry, subscription) {
    if (!entry || entry.type !== 'payment' || !subscription) {
        return 0;
    }

    if (Array.isArray(entry.subscriptionAllocations) && entry.subscriptionAllocations.length) {
        return entry.subscriptionAllocations
            .filter((allocation) => Number(allocation.subscriptionId) === Number(subscription.id))
            .reduce((sum, allocation) => sum + Number(allocation.amountSubscriptionCurrency || 0), 0);
    }

    if (Number(entry.invoiceId || 0) === Number(subscription.id)) {
        return convertCurrencyAmount(getPaymentEntryBaseAmount(entry), BASE_CURRENCY, subscription.currency);
    }

    return 0;
}

function reconcileSubscriptionsFromPayments() {
    (appState.subscriptionRecords || []).forEach((subscription) => {
        normalizeSubscriptionFinancials(subscription);

        if (subscription.paymentMethod !== 'أجل') {
            return;
        }

        const paidFromHistory = (appState.customerRecords || []).reduce((sum, customer) => {
            normalizeCustomerFinancials(customer);
            return sum + customer.paymentHistory.reduce((entrySum, entry) => {
                return entrySum + getAppliedAmountForSubscription(entry, subscription);
            }, 0);
        }, 0);

        subscription.paidAmount = Math.min(Number(subscription.finalPrice || 0), Number(paidFromHistory || 0));
        subscription.outstandingAmount = Math.max(Number(subscription.finalPrice || 0) - subscription.paidAmount, 0);
        subscription.paymentStatus = getPaymentStatusFromOutstanding(subscription.outstandingAmount, subscription.finalPrice);
    });
}

function getCustomerSubscriptionDebt(customerId) {
    return getCustomerSubscriptions(customerId)
        .reduce((sum, subscription) => sum + convertCurrencyAmount(subscription.outstandingAmount || 0, subscription.currency, appState.currency), 0);
}

function getCustomerTotalDebt(customer) {
    return getCustomerManualDebt(customer) + getCustomerSubscriptionDebt(customer.id);
}

function getPaymentsViewCurrency() {
    return appState.activePaymentsCurrency || appState.currency;
}

function formatMoneyByCurrency(value, currency) {
    return `${formatNumber(value)} ${currency}`;
}

function getCustomerManualDebtForCurrency(customer, currency) {
    normalizeCustomerFinancials(customer);
    return customer.paymentHistory.reduce((sum, entry) => {
        if (entry.type === 'debt' && (entry.currency || appState.currency) === currency) {
            return sum + Number(entry.amount || 0);
        }
        return sum;
    }, 0);
}

function getCustomerSubscriptionDebtForCurrency(customerId, currency) {
    return getCustomerSubscriptions(customerId)
        .filter((subscription) => (subscription.currency || appState.currency) === currency)
        .reduce((sum, subscription) => sum + Number(subscription.outstandingAmount || 0), 0);
}

function getAllPaymentHistory() {
    return (appState.customerRecords || [])
        .flatMap((customer) => {
            normalizeCustomerFinancials(customer);
            return customer.paymentHistory.map((entry) => ({
                ...entry,
                baseAmount: getPaymentEntryBaseAmount(entry),
                normalizedAmount: convertCurrencyAmount(getPaymentEntryBaseAmount(entry), BASE_CURRENCY, appState.currency),
                customerId: customer.id,
                customerName: customer.fullName
            }));
        })
        .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
}

function populatePaymentsCustomerSelects() {
    const options = ['<option value="">اختر العميل</option>']
        .concat(appState.customerRecords.map((customer) => `<option value="${customer.id}">${customer.fullName} - ${customer.phone}</option>`))
        .join('');

    [paymentsDebtCustomer, paymentsPayCustomer, paymentsModalCustomer].forEach((selectElement) => {
        if (selectElement) {
            const previousValue = selectElement.value;
            selectElement.innerHTML = options;
            if ([...selectElement.options].some((option) => option.value === previousValue)) {
                selectElement.value = previousValue;
            }
        }
    });

    populateCurrencySelect(paymentsDebtCurrency, appState.currency);
    populateCurrencySelect(paymentsPayCurrency, appState.currency);
    populateCurrencySelect(paymentsModalCurrency, appState.currency);
    if (paymentsPayMethod && !paymentsPayMethod.value) {
        paymentsPayMethod.value = appState.subscriptionPaymentMethod || 'كاش';
    }
    if (paymentsModalMethod) {
        const methods = ['جيب', 'ون كاش', 'كاش', 'جوال', 'فلاوسك', 'إيزي', 'محفظتي', 'المتكاملة', 'شأن القطبي', 'تحويل بنكي', 'بطاقة', 'نقدًا'];
        const previousValue = paymentsModalMethod.value;
        paymentsModalMethod.innerHTML = '<option value="">اختر طريقة الدفع</option>' + methods.map((method) => `<option value="${method}">${method}</option>`).join('');
        paymentsModalMethod.value = methods.includes(previousValue) ? previousValue : '';
    }
}

function populatePaymentsInvoiceOptions() {
    if (!paymentsInvoiceSelect) {
        return;
    }

    const previousValue = paymentsInvoiceSelect.value;
    const invoiceOptions = (appState.subscriptionRecords || [])
        .map((subscription) => {
            normalizeSubscriptionFinancials(subscription);
            return subscription;
        })
        .filter((subscription) => Number(subscription.outstandingAmount || 0) > 0)
        .sort((a, b) => Number(b.id || 0) - Number(a.id || 0));

    paymentsInvoiceSelect.innerHTML = '<option value="">اختر الفاتورة</option>' + invoiceOptions.map((subscription) => `
        <option value="${subscription.id}">
            ${subscription.customerName} - ${subscription.invoiceNumber} (متبقي ${formatNumber(subscription.outstandingAmount)} ${subscription.currency})
        </option>
    `).join('');

    if ([...paymentsInvoiceSelect.options].some((option) => option.value === previousValue)) {
        paymentsInvoiceSelect.value = previousValue;
    }
}

function syncPaymentsEntryTypeUi() {
    paymentEntryTypeButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.paymentEntryType === appState.activePaymentEntryType);
    });

    const type = appState.activePaymentEntryType;
    if (paymentsInvoiceFields) {
        paymentsInvoiceFields.style.display = type === 'invoice' ? 'block' : 'none';
    }
    if (paymentsCustomerFields) {
        paymentsCustomerFields.style.display = type === 'invoice' ? 'none' : 'block';
    }
    if (paymentsMethodField) {
        paymentsMethodField.style.display = type === 'debt' ? 'none' : 'block';
    }
}

function openPaymentsModal() {
    appState.activePaymentEntryType = 'invoice';
    populatePaymentsCustomerSelects();
    populatePaymentsInvoiceOptions();
    syncPaymentsEntryTypeUi();
    if (paymentsModalDate) {
        paymentsModalDate.value = new Date().toISOString().slice(0, 10);
    }
    if (paymentsModalAmount) {
        paymentsModalAmount.value = '';
    }
    if (paymentsModalReference) {
        paymentsModalReference.value = '';
    }
    if (paymentsModalNote) {
        paymentsModalNote.value = '';
    }
    if (paymentsModalMethod) {
        paymentsModalMethod.value = '';
    }
    if (paymentsModalCurrency) {
        paymentsModalCurrency.value = appState.currency;
    }
    if (paymentsModalCustomer) {
        paymentsModalCustomer.value = '';
    }
    if (paymentsInvoiceSelect) {
        paymentsInvoiceSelect.value = '';
    }
    openModal('paymentsModal');
}

function syncPaymentsModalFromInvoice() {
    const subscriptionId = Number(paymentsInvoiceSelect?.value || 0);
    const subscription = appState.subscriptionRecords.find((item) => item.id === subscriptionId);
    if (!subscription) {
        return;
    }

    normalizeSubscriptionFinancials(subscription);
    if (paymentsModalAmount) {
        paymentsModalAmount.value = String(subscription.outstandingAmount || 0);
    }
    if (paymentsModalCurrency) {
        populateCurrencySelect(paymentsModalCurrency, subscription.currency);
    }
    if (paymentsModalNote) {
        paymentsModalNote.value = `سداد الفاتورة ${subscription.invoiceNumber}`;
    }
}

function renderPaymentsFilterTabs(historyEntries) {
    if (!paymentsFilterTabs) {
        return;
    }

    const methods = [...new Set(historyEntries.filter((entry) => entry.type === 'payment').map((entry) => entry.method).filter(Boolean))];
    const filters = [{ id: 'all', label: 'الكل' }, ...methods.map((method) => ({ id: method, label: method }))];

    paymentsFilterTabs.innerHTML = filters.map((filter) => `
        <button class="payments-filter-tab ${appState.activePaymentsFilter === filter.id ? 'active' : ''}" type="button" data-payments-filter="${filter.id}">
            ${filter.label}
        </button>
    `).join('');

    paymentsFilterTabs.querySelectorAll('[data-payments-filter]').forEach((button) => {
        button.addEventListener('click', () => {
            appState.activePaymentsFilter = button.dataset.paymentsFilter;
            renderPayments();
        });
    });
}

function renderPayments() {
    reconcileAllCustomerFinancials();
    reconcileSubscriptionsFromPayments();
    populatePaymentsCustomerSelects();
    populatePaymentsInvoiceOptions();

    if (!paymentsCustomersList || !paymentsHistoryList) {
        return;
    }

    const customers = (appState.customerRecords || []).map((customer) => {
        normalizeCustomerFinancials(customer);
        return customer;
    });
    const selectedCurrency = getPaymentsViewCurrency();
    const searchValue = paymentsSearchInput?.value.trim().toLowerCase() || '';
    const customerCards = customers
        .map((customer) => ({
            customer,
            manualDebt: getCustomerManualDebtForCurrency(customer, selectedCurrency),
            subscriptionDebt: getCustomerSubscriptionDebtForCurrency(customer.id, selectedCurrency),
            totalDebt: getCustomerManualDebtForCurrency(customer, selectedCurrency) + getCustomerSubscriptionDebtForCurrency(customer.id, selectedCurrency)
        }))
        .filter((entry) => entry.totalDebt > 0)
        .filter((entry) => !searchValue || [
            entry.customer.fullName,
            entry.customer.phone,
            String(entry.customer.customerNumber)
        ].some((value) => String(value).toLowerCase().includes(searchValue)))
        .sort((a, b) => b.totalDebt - a.totalDebt);

    const history = getAllPaymentHistory().filter((entry) => (entry.currency || appState.currency) === selectedCurrency);
    const paymentEntries = history.filter((entry) => entry.type === 'payment');
    const totalDebt = customerCards.reduce((sum, entry) => sum + entry.totalDebt, 0);
    const debtorsCount = customerCards.length;
    const collectedTotal = paymentEntries
        .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    const currencyTotals = history.reduce((acc, entry) => {
        const key = entry.currency || appState.currency;
        acc[key] = (acc[key] || 0) + Number(entry.amount || 0);
        return acc;
    }, {});

    const methodTotals = paymentEntries.reduce((acc, entry) => {
        const key = entry.method || 'غير محدد';
        if (!acc[key]) {
            acc[key] = { count: 0, total: 0 };
        }
        acc[key].count += 1;
        acc[key].total += Number(entry.amount || 0);
        return acc;
    }, {});

    paymentsCollectedTotal.textContent = formatMoneyByCurrency(collectedTotal, selectedCurrency);
    if (paymentsTransactionsCount) {
        paymentsTransactionsCount.textContent = `${formatNumber(paymentEntries.length)} عملية دفع`;
    }
    if (paymentsGrandTotal) {
        paymentsGrandTotal.textContent = formatMoneyByCurrency(totalDebt + collectedTotal, selectedCurrency);
    }
    if (paymentsCurrencySummary) {
        paymentsCurrencySummary.textContent = getCurrencyName(selectedCurrency);
    }
    if (paymentsTotalDebt) {
        paymentsTotalDebt.textContent = formatMoneyByCurrency(totalDebt, selectedCurrency);
    }
    if (paymentsDebtorsCount) {
        paymentsDebtorsCount.textContent = `${formatNumber(debtorsCount)} عميل`;
    }

    paymentsCustomersList.innerHTML = customerCards.length
        ? customerCards.map(({ customer, manualDebt, subscriptionDebt, totalDebt }) => `
            <article class="payments-customer-item">
                <div class="payments-customer-head">
                    <div>
                        <div class="payments-customer-name">${customer.fullName}</div>
                        <div class="payments-customer-meta">#${formatNumber(customer.customerNumber)} - ${customer.phone}</div>
                    </div>
                    <div class="payments-customer-debt">${formatMoneyByCurrency(totalDebt, selectedCurrency)}</div>
                </div>
                <div class="payments-customer-body">
                    <div class="payments-debt-box">
                        <span>مديونية يدوية</span>
                        <strong>${formatMoneyByCurrency(manualDebt, selectedCurrency)}</strong>
                    </div>
                    <div class="payments-debt-box">
                        <span>ديون الاشتراكات</span>
                        <strong>${formatMoneyByCurrency(subscriptionDebt, selectedCurrency)}</strong>
                    </div>
                    <div class="payments-debt-box">
                        <span>إجمالي المديونية</span>
                        <strong>${formatMoneyByCurrency(totalDebt, selectedCurrency)}</strong>
                    </div>
                </div>
            </article>
        `).join('')
        : '<div class="empty-search">لا يوجد عملاء عليهم مدفوعات آجلة حالياً.</div>';

    if (paymentsCurrencyReport) {
        paymentsCurrencyReport.innerHTML = Object.keys(currencyTotals).length
            ? Object.entries(currencyTotals).map(([currency, total]) => `
                <div class="payments-currency-card">
                    <strong>${currency}</strong>
                    <div class="payments-customer-debt">${formatNumber(total)}</div>
                    <span>${formatNumber(history.filter((entry) => (entry.currency || appState.currency) === currency).length)} عملية</span>
                </div>
            `).join('')
            : '<div class="empty-search">لا توجد بيانات مدفوعات بعد.</div>';
    }

    if (paymentsMethodsGrid) {
        paymentsMethodsGrid.innerHTML = Object.keys(methodTotals).length
            ? Object.entries(methodTotals).map(([method, details]) => `
                <div class="payments-method-card">
                    <strong>${method}</strong>
                    <div class="payments-customer-debt">${formatMoneyByCurrency(details.total, selectedCurrency)}</div>
                    <span>${formatNumber(details.count)} عمليات</span>
                </div>
            `).join('')
            : '<div class="empty-search">لا توجد طرق دفع مسجلة بعد.</div>';
    }

    renderPaymentsFilterTabs(history);
    const filteredHistory = history.filter((entry) => appState.activePaymentsFilter === 'all' || entry.method === appState.activePaymentsFilter);

    paymentsHistoryList.innerHTML = filteredHistory.length
        ? filteredHistory.slice(0, 20).map((entry) => `
            <article class="payments-history-row">
                <div class="payments-history-payment">
                    <span class="payments-history-icon ${entry.type}">${entry.type === 'payment' ? '💳' : '🧾'}</span>
                    <div>
                        <div class="payments-history-main">${entry.type === 'payment' ? (entry.method || 'سداد') : 'إضافة مديونية'}</div>
                        <div class="payments-history-sub">${formatDate(entry.createdAt)}</div>
                    </div>
                </div>
                <div>
                    <div class="payments-history-main">${entry.customerName}</div>
                    <div class="payments-history-sub">#${formatNumber(appState.customerRecords.find((item) => item.id === entry.customerId)?.customerNumber || 0)}</div>
                </div>
                <div>
                    <div class="payments-history-main">${entry.invoiceNumber || '-'}</div>
                    <div class="payments-history-sub">${entry.note || '-'}</div>
                </div>
                <div>
                    <div class="payments-history-main">${formatNumber(entry.amount || 0)} ${entry.currency || appState.currency}</div>
                    <div class="payments-history-sub">${getCurrencyName(entry.currency || selectedCurrency)}</div>
                </div>
                <div>
                    <div class="payments-history-main">${entry.reference || '-'}</div>
                    <div class="payments-history-sub">${entry.method || '-'}</div>
                </div>
                <div class="payments-history-actions">
                    <button class="payments-delete-btn" type="button" data-payment-delete="${entry.id}" data-payment-customer="${entry.customerId}">حذف</button>
                </div>
            </article>
        `).join('')
        : '<div class="empty-search">لا توجد حركات مدفوعات أو مديونية حتى الآن.</div>';

    paymentsHistoryList.querySelectorAll('[data-payment-delete]').forEach((button) => {
        button.addEventListener('click', () => {
            deletePaymentEntry(Number(button.dataset.paymentDelete), Number(button.dataset.paymentCustomer));
        });
    });
}

function deletePaymentEntry(entryId, customerId) {
    const customer = appState.customerRecords.find((item) => item.id === customerId);
    if (!customer) {
        showToast('تعذر العثور على العميل المرتبط بهذه الحركة.', 'خطأ', 'error');
        return;
    }

    normalizeCustomerFinancials(customer);
    const entryIndex = customer.paymentHistory.findIndex((item) => Number(item.id) === Number(entryId));
    if (entryIndex === -1) {
        showToast('تعذر العثور على حركة الدفع المحددة.', 'خطأ', 'error');
        return;
    }

    const entry = customer.paymentHistory[entryIndex];
    const confirmed = window.confirm('سيتم حذف حركة الدفع وإرجاع أثرها على الرصيد أو الفاتورة. هل تريد المتابعة؟');
    if (!confirmed) {
        return;
    }

    if (entry.type === 'debt') {
        customer.paymentHistory.splice(entryIndex, 1);
        customer.manualDebtBalance = getCustomerManualDebtBase(customer);
    } else {
        if (Array.isArray(entry.subscriptionAllocations) && entry.subscriptionAllocations.length) {
            entry.subscriptionAllocations.forEach((allocation) => {
                const subscription = appState.subscriptionRecords.find((item) => item.id === allocation.subscriptionId);
                if (!subscription) {
                    return;
                }

                normalizeSubscriptionFinancials(subscription);
                subscription.outstandingAmount = Math.min(subscription.finalPrice, Number(subscription.outstandingAmount || 0) + Number(allocation.amountSubscriptionCurrency || 0));
                subscription.paidAmount = Math.max(0, Number(subscription.paidAmount || 0) - Number(allocation.amountSubscriptionCurrency || 0));
                subscription.paymentStatus = getPaymentStatusFromOutstanding(subscription.outstandingAmount, subscription.finalPrice);
            });
        } else if (entry.invoiceId) {
            const subscription = appState.subscriptionRecords.find((item) => item.id === entry.invoiceId);
            if (subscription) {
                normalizeSubscriptionFinancials(subscription);
                const rollbackAmount = convertCurrencyAmount(getPaymentEntryBaseAmount(entry), BASE_CURRENCY, subscription.currency);
                subscription.outstandingAmount = Math.min(subscription.finalPrice, Number(subscription.outstandingAmount || 0) + rollbackAmount);
                subscription.paidAmount = Math.max(0, Number(subscription.paidAmount || 0) - rollbackAmount);
                subscription.paymentStatus = getPaymentStatusFromOutstanding(subscription.outstandingAmount, subscription.finalPrice);
            }
        }

        customer.paymentHistory.splice(entryIndex, 1);
        customer.manualDebtBalance = getCustomerManualDebtBase(customer);
    }

    saveAppState();
    syncTotals();
    renderDashboard();
    renderCustomers();
    renderSubscriptions();
    renderPayments();
    renderInvoices();
    showToast('تم حذف حركة الدفع بنجاح.', 'المدفوعات', 'success');
}

function addManualDebt(options = {}) {
    const customerId = Number(options.customerId || paymentsDebtCustomer?.value || 0);
    const amount = Number(options.amount || paymentsDebtAmount?.value || 0);
    const currency = options.currency || paymentsDebtCurrency?.value || appState.currency;
    const note = options.note || paymentsDebtNote?.value.trim() || 'Manual debt';
    const createdAt = options.createdAt || Date.now();
    const reference = options.reference || '';
    const customer = appState.customerRecords.find((item) => item.id === customerId);
    if (!customer || amount <= 0) {
        showToast('Enter a valid customer and debt amount.', 'Error', 'error');
        return false;
    }
    normalizeCustomerFinancials(customer);
    const baseAmount = convertToBaseCurrency(amount, currency);
    customer.paymentHistory.unshift({
        id: Date.now(),
        type: 'debt',
        amount,
        currency,
        baseAmount,
        note,
        reference,
        createdAt
    });
    customer.manualDebtBalance = getCustomerManualDebtBase(customer);
    if (paymentsDebtAmount) paymentsDebtAmount.value = '';
    if (paymentsDebtNote) paymentsDebtNote.value = '';
    saveAppState();
    syncTotals();
    renderDashboard();
    renderCustomers();
    renderSubscriptions();
    renderPayments();
    renderInvoices();
    showToast('Debt added for ' + customer.fullName, 'Payments', 'success');
    return true;
}

function submitCustomerPayment(options = {}) {
    const customerId = Number(options.customerId || paymentsPayCustomer?.value || 0);
    const requestedAmount = Number(options.amount || paymentsPayAmount?.value || 0);
    const currency = options.currency || paymentsPayCurrency?.value || appState.currency;
    const method = options.method || paymentsPayMethod?.value.trim() || 'Cash';
    const note = options.note || paymentsPayNote?.value.trim() || 'Customer payment';
    const createdAt = options.createdAt || Date.now();
    const reference = options.reference || '';
    const invoiceId = Number(options.invoiceId || 0);
    const customer = appState.customerRecords.find((item) => item.id === customerId);
    if (!customer || requestedAmount <= 0) {
        showToast('Enter a valid customer and payment amount.', 'Error', 'error');
        return false;
    }
    normalizeCustomerFinancials(customer);
    let remainingBaseAmount = convertToBaseCurrency(requestedAmount, currency);
    const totalDebtBase = getCustomerManualDebtBase(customer)
        + getCustomerSubscriptions(customer.id).reduce((sum, subscription) => {
            normalizeSubscriptionFinancials(subscription);
            return sum + convertToBaseCurrency(subscription.outstandingAmount || 0, subscription.currency);
        }, 0);
    const appliedBaseAmount = Math.min(remainingBaseAmount, totalDebtBase);
    if (appliedBaseAmount <= 0) {
        showToast('No outstanding debt for this customer.', 'Notice', 'warning');
        return false;
    }
    const manualDebtBase = getCustomerManualDebtBase(customer);
    const manualAppliedBase = Math.min(manualDebtBase, remainingBaseAmount);
    remainingBaseAmount -= manualAppliedBase;
    const subscriptionAllocations = [];
    let linkedInvoiceNumber = '';
    getCustomerSubscriptions(customer.id)
        .filter((subscription) => Number(subscription.outstandingAmount || 0) > 0)
        .filter((subscription) => !invoiceId || subscription.id === invoiceId)
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        .forEach((subscription) => {
            if (remainingBaseAmount <= 0) return;
            normalizeSubscriptionFinancials(subscription);
            const outstandingBase = convertToBaseCurrency(subscription.outstandingAmount, subscription.currency);
            const appliedToSubscriptionBase = Math.min(outstandingBase, remainingBaseAmount);
            const appliedToSubscriptionCurrency = convertCurrencyAmount(appliedToSubscriptionBase, BASE_CURRENCY, subscription.currency);
            subscription.outstandingAmount = Math.max(subscription.outstandingAmount - appliedToSubscriptionCurrency, 0);
            subscription.paidAmount = Math.min(subscription.finalPrice, Number(subscription.paidAmount || 0) + appliedToSubscriptionCurrency);
            subscription.paymentStatus = getPaymentStatusFromOutstanding(subscription.outstandingAmount, subscription.finalPrice);
            linkedInvoiceNumber = subscription.invoiceNumber || linkedInvoiceNumber;
            subscriptionAllocations.push({
                subscriptionId: subscription.id,
                amountBase: appliedToSubscriptionBase,
                amountSubscriptionCurrency: appliedToSubscriptionCurrency
            });
            remainingBaseAmount -= appliedToSubscriptionBase;
        });
    customer.paymentHistory.unshift({
        id: Date.now(),
        type: 'payment',
        amount: requestedAmount,
        currency,
        baseAmount: appliedBaseAmount,
        method,
        note,
        reference,
        invoiceId: invoiceId || null,
        invoiceNumber: linkedInvoiceNumber,
        manualAppliedBase,
        settlementCurrency: currency,
        subscriptionAllocations,
        createdAt
    });
    customer.manualDebtBalance = getCustomerManualDebtBase(customer);
    if (paymentsPayAmount) paymentsPayAmount.value = '';
    if (paymentsPayNote) paymentsPayNote.value = '';
    saveAppState();
    syncTotals();
    renderDashboard();
    renderCustomers();
    renderSubscriptions();
    renderPayments();
    renderInvoices();
    showToast('Payment saved for ' + customer.fullName, 'Payments', 'success');
    return true;
}

function submitPaymentsModal() {
    const type = appState.activePaymentEntryType;
    const amount = Number(paymentsModalAmount?.value || 0);
    const currency = paymentsModalCurrency?.value || appState.currency;
    const createdAt = paymentsModalDate?.value ? new Date(paymentsModalDate.value).getTime() : Date.now();
    const reference = paymentsModalReference?.value.trim() || '';
    const note = paymentsModalNote?.value.trim() || '';
    let success = false;
    if (amount <= 0) {
        showToast('Enter a valid amount first.', 'Error', 'error');
        return;
    }
    if (type !== 'debt' && !(paymentsModalMethod?.value || '').trim()) {
        showToast('Select a payment method first.', 'Error', 'error');
        return;
    }
    if (type === 'invoice') {
        const invoiceId = Number(paymentsInvoiceSelect?.value || 0);
        const subscription = appState.subscriptionRecords.find((item) => item.id === invoiceId);
        if (!subscription) {
            showToast('Select an invoice first.', 'Error', 'error');
            return;
        }
        success = submitCustomerPayment({
            customerId: subscription.customerId,
            amount,
            currency,
            method: paymentsModalMethod?.value || '',
            note: note || ('Invoice payment ' + subscription.invoiceNumber),
            createdAt,
            reference,
            invoiceId: subscription.id
        });
    } else if (type === 'credit') {
        const customerId = Number(paymentsModalCustomer?.value || 0);
        success = submitCustomerPayment({
            customerId,
            amount,
            currency,
            method: paymentsModalMethod?.value || '',
            note: note || 'Customer credit',
            createdAt,
            reference
        });
    } else {
        const customerId = Number(paymentsModalCustomer?.value || 0);
        success = addManualDebt({
            customerId,
            amount,
            currency,
            note: note || 'Add debt',
            createdAt,
            reference
        });
    }
    if (success) {
        populatePaymentsInvoiceOptions();
        closeModal('paymentsModal');
    }
}

function exportPaymentsCsv() {
    const rows = [['النوع', 'العميل', 'الفاتورة', 'المبلغ', 'العملة', 'الطريقة', 'المرجع', 'التاريخ']];
    getAllPaymentHistory().forEach((entry) => {
        rows.push([
            entry.type === 'payment' ? 'دفعة' : 'مديونية',
            entry.customerName,
            entry.invoiceNumber || '',
            entry.amount,
            entry.currency || appState.currency,
            entry.method || '',
            entry.reference || '',
            formatDate(entry.createdAt)
        ]);
    });
    const csv = rows.map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
    copyToClipboard(csv, 'سجل المدفوعات CSV');
}

function getTimestampFromRecord(record, fallbackDate = '') {
    if (!record) return 0;
    if (record.createdAt) return Number(record.createdAt);
    if (fallbackDate) return new Date(fallbackDate).getTime();
    if (record.startDate) return new Date(record.startDate).getTime();
    if (record.id) return Number(record.id);
    return 0;
}

function getReportsRangeBounds() {
    const now = new Date();
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);

    if (appState.activeReportsRange === 'all') return { from: 0, to: Number.MAX_SAFE_INTEGER, label: 'كل الفترات' };
    if (appState.activeReportsRange === 'week') {
        const diff = (start.getDay() + 6) % 7;
        start.setDate(start.getDate() - diff);
        return { from: start.getTime(), to: end.getTime(), label: 'هذا الأسبوع' };
    }
    if (appState.activeReportsRange === 'month') {
        start.setDate(1);
        return { from: start.getTime(), to: end.getTime(), label: 'هذا الشهر' };
    }
    if (appState.activeReportsRange === 'year') {
        start.setMonth(0, 1);
        return { from: start.getTime(), to: end.getTime(), label: 'هذه السنة' };
    }
    if (appState.activeReportsRange === 'custom') {
        const from = reportsDateFrom?.value ? new Date(reportsDateFrom.value).getTime() : 0;
        const to = reportsDateTo?.value ? new Date(reportsDateTo.value).setHours(23, 59, 59, 999) : Number.MAX_SAFE_INTEGER;
        return { from, to, label: reportsDateFrom?.value || reportsDateTo?.value ? `من ${reportsDateFrom?.value || 'البداية'} إلى ${reportsDateTo?.value || 'الآن'}` : 'فترة مخصصة' };
    }
    return { from: start.getTime(), to: end.getTime(), label: 'اليوم' };
}

function isWithinRange(timestamp, range) {
    return Number(timestamp || 0) >= range.from && Number(timestamp || 0) <= range.to;
}

function renderReports() {
    if (!reportsRevenue || !reportsSummaryList) {
        return;
    }

    const range = getReportsRangeBounds();
    reportsRangeTabs?.querySelectorAll('[data-report-range]').forEach((button) => {
        button.classList.toggle('active', button.dataset.reportRange === appState.activeReportsRange);
    });
    if (reportsCustomRange) {
        reportsCustomRange.style.display = appState.activeReportsRange === 'custom' ? 'grid' : 'none';
    }
    if (reportsPeriodNote) {
        reportsPeriodNote.textContent = `الفترة الحالية: ${range.label} • العملة الرئيسية: ${appState.currency}`;
    }

    const subscriptions = (appState.subscriptionRecords || [])
        .map((item) => ({ ...item, reportTimestamp: getTimestampFromRecord(item, item.startDate) }))
        .filter((item) => isWithinRange(item.reportTimestamp, range));
    const customers = (appState.customerRecords || []).filter((item) => isWithinRange(getTimestampFromRecord(item), range));
    const services = (appState.serviceRecords || []).filter((item) => isWithinRange(getTimestampFromRecord(item), range));
    const history = getAllPaymentHistory().filter((item) => isWithinRange(getTimestampFromRecord(item), range));
    const paymentEntries = history.filter((item) => item.type === 'payment');
    const debtEntries = history.filter((item) => item.type === 'debt');

    const subscriptionsRevenue = subscriptions.reduce((sum, item) => sum + convertCurrencyAmount(item.finalPrice || 0, item.currency, appState.currency), 0);
    const subscriptionsCosts = subscriptions.reduce((sum, item) => sum + convertCurrencyAmount(item.totalCost || 0, item.currency, appState.currency), 0);
    const subscriptionsProfit = subscriptions.reduce((sum, item) => sum + convertCurrencyAmount(item.profit || 0, item.currency, appState.currency), 0);
    const collectedPayments = paymentEntries.reduce((sum, item) => sum + convertCurrencyAmount(item.amount || 0, item.currency, appState.currency), 0);
    const addedDebt = debtEntries.reduce((sum, item) => sum + convertCurrencyAmount(item.amount || 0, item.currency, appState.currency), 0);
    const servicesCount = subscriptions.reduce((sum, item) => sum + (item.services?.length || 0), 0);

    reportsRevenue.textContent = formatMoney(subscriptionsRevenue);
    reportsCosts.textContent = formatMoney(subscriptionsCosts);
    reportsProfit.textContent = formatMoney(subscriptionsProfit);
    reportsCollected.textContent = formatMoney(collectedPayments);
    reportsSubscriptionsCount.textContent = formatNumber(subscriptions.length);
    reportsServicesCount.textContent = formatNumber(servicesCount);
    reportsCustomersCount.textContent = formatNumber(customers.length);
    reportsDebtAdded.textContent = formatMoney(addedDebt);

    reportsSummaryList.innerHTML = [
        ['عدد الخدمات المضافة', formatNumber(services.length)],
        ['عدد عمليات الدفع', formatNumber(paymentEntries.length)],
        ['عدد المديونيات المضافة', formatNumber(debtEntries.length)],
        ['متوسط الاشتراك', formatMoney(subscriptions.length ? subscriptionsRevenue / subscriptions.length : 0)],
        ['متوسط الدفعة', formatMoney(paymentEntries.length ? collectedPayments / paymentEntries.length : 0)],
        ['إجمالي العملاء في النظام', formatNumber(appState.customerRecords.length)]
    ].map(([label, value]) => `<div class="reports-summary-item"><span>${label}</span><strong>${value}</strong></div>`).join('');

    const methodTotals = paymentEntries.reduce((acc, item) => {
        const key = item.method || 'غير محدد';
        if (!acc[key]) acc[key] = { count: 0, total: 0 };
        acc[key].count += 1;
        acc[key].total += convertCurrencyAmount(item.amount || 0, item.currency, appState.currency);
        return acc;
    }, {});
    reportsMethodsList.innerHTML = Object.keys(methodTotals).length
        ? Object.entries(methodTotals).sort((a, b) => b[1].total - a[1].total).map(([method, details]) => `<div class="reports-compact-item"><div><strong>${method}</strong><small>${formatNumber(details.count)} عمليات</small></div><span>${formatMoney(details.total)}</span></div>`).join('')
        : '<div class="empty-search">لا توجد طرق دفع ضمن الفترة المحددة.</div>';

    const topServices = subscriptions.reduce((acc, subscription) => {
        (subscription.services || []).forEach((service) => {
            const key = service.name || 'خدمة';
            if (!acc[key]) acc[key] = { count: 0, total: 0 };
            acc[key].count += 1;
            acc[key].total += convertCurrencyAmount(service.price || 0, subscription.currency, appState.currency);
        });
        return acc;
    }, {});
    reportsServicesList.innerHTML = Object.keys(topServices).length
        ? Object.entries(topServices).sort((a, b) => b[1].count - a[1].count).slice(0, 8).map(([name, details]) => `<div class="reports-compact-item"><div><strong>${name}</strong><small>${formatNumber(details.count)} مرة</small></div><span>${formatMoney(details.total)}</span></div>`).join('')
        : '<div class="empty-search">لا توجد خدمات ضمن الفترة المحددة.</div>';

    const activity = [
        ...subscriptions.map((item) => ({ type: 'اشتراك', title: item.customerName, subtitle: item.services?.map((service) => service.name).join(' - ') || '-', amount: convertCurrencyAmount(item.finalPrice || 0, item.currency, appState.currency), timestamp: item.reportTimestamp })),
        ...paymentEntries.map((item) => ({ type: 'دفعة', title: item.customerName, subtitle: item.method || 'سداد', amount: convertCurrencyAmount(item.amount || 0, item.currency, appState.currency), timestamp: item.createdAt })),
        ...debtEntries.map((item) => ({ type: 'مديونية', title: item.customerName, subtitle: item.note || 'إضافة مديونية', amount: convertCurrencyAmount(item.amount || 0, item.currency, appState.currency), timestamp: item.createdAt })),
        ...customers.map((item) => ({ type: 'عميل', title: item.fullName, subtitle: item.phone, amount: null, timestamp: getTimestampFromRecord(item) })),
        ...services.map((item) => ({ type: 'خدمة', title: item.name, subtitle: item.type === 'private' ? 'خاصة' : 'مشتركة', amount: null, timestamp: getTimestampFromRecord(item) }))
    ].sort((a, b) => b.timestamp - a.timestamp).slice(0, 12);
    reportsActivityList.innerHTML = activity.length
        ? activity.map((item) => `<div class="reports-activity-item"><div><strong>${item.type}: ${item.title}</strong><small>${item.subtitle} • ${formatDate(item.timestamp)}</small></div><span>${item.amount == null ? '-' : formatMoney(item.amount)}</span></div>`).join('')
        : '<div class="empty-search">لا توجد حركات في الفترة المحددة.</div>';
}

function getFilteredInvoices() {
    const searchValue = invoicesSearchInput?.value.trim().toLowerCase() || '';
    return (appState.subscriptionRecords || [])
        .map((subscription) => {
            normalizeSubscriptionFinancials(subscription);
            return subscription;
        })
        .filter((subscription) => {
            if (!searchValue) {
                return true;
            }

            return [
                subscription.customerName,
                subscription.invoiceNumber,
                String(subscription.customerNumber),
                ...(subscription.services || []).map((service) => service.name)
            ].some((value) => String(value).toLowerCase().includes(searchValue));
        })
        .sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
}

function getActiveInvoice() {
    const invoices = getFilteredInvoices();
    if (!invoices.length) {
        return null;
    }

    const active = invoices.find((subscription) => String(subscription.id) === String(appState.activeInvoiceId));
    if (active) {
        return active;
    }

    appState.activeInvoiceId = invoices[0].id;
    return invoices[0];
}

function renderInvoices() {
    if (!invoicesList || !invoicePreviewEmpty || !invoicePreviewContent) {
        return;
    }

    const invoices = getFilteredInvoices();
    const activeInvoice = getActiveInvoice();

    invoicesList.innerHTML = invoices.length
        ? invoices.map((subscription) => `
            <article class="invoice-list-item ${String(subscription.id) === String(activeInvoice?.id) ? 'active' : ''}" data-invoice-id="${subscription.id}">
                <div class="invoice-list-title">${subscription.customerName}</div>
                <div class="invoice-list-meta">${subscription.invoiceNumber}</div>
                <div class="invoice-list-meta">${subscription.services.map((service) => service.name).join('، ')}</div>
                <div class="invoice-list-meta">المتبقي ${formatNumber(convertCurrencyAmount(subscription.outstandingAmount || 0, subscription.currency, appState.currency))} ${appState.currency}</div>
            </article>
        `).join('')
        : '<div class="empty-search">لا توجد فواتير اشتراكات مطابقة.</div>';

    invoicesList.querySelectorAll('[data-invoice-id]').forEach((item) => {
        item.addEventListener('click', () => {
            appState.activeInvoiceId = Number(item.dataset.invoiceId);
            renderInvoices();
        });
    });

    if (!activeInvoice) {
        invoicePreviewEmpty.style.display = 'flex';
        invoicePreviewContent.style.display = 'none';
        return;
    }

    invoicePreviewEmpty.style.display = 'none';
    invoicePreviewContent.style.display = 'block';

    const paidAmount = Math.max(Number(activeInvoice.finalPrice || 0) - Number(activeInvoice.outstandingAmount || 0), 0);
    invoiceTitle.textContent = `فاتورة اشتراك ${activeInvoice.invoiceNumber}`;
    invoiceMeta.textContent = `من ${formatDate(activeInvoice.startDate)} إلى ${formatDate(activeInvoice.endDate)} - ${getPaymentStatusLabel(activeInvoice.paymentStatus)}${activeInvoice.paymentMethod === 'أجل' && activeInvoice.paymentStatus === 'paid' ? ' - تم سداد الأجل' : activeInvoice.paymentStatus === 'due' ? ` - استحقاق ${formatDate(activeInvoice.dueDate || activeInvoice.endDate)}` : ''}`;
    invoiceCustomerName.textContent = activeInvoice.customerName;
    invoiceTotalAmount.textContent = `${formatNumber(activeInvoice.finalPrice)} ${activeInvoice.currency}`;
    invoicePaidAmount.textContent = `${formatNumber(paidAmount)} ${activeInvoice.currency}`;
    invoiceRemainingAmount.textContent = `${formatNumber(activeInvoice.outstandingAmount)} ${activeInvoice.currency}`;

    invoiceServicesList.innerHTML = (activeInvoice.services || []).map((service) => `
        <div class="invoice-service-item">
            <div>
                <div class="invoice-service-name">${service.name}</div>
                <div class="invoice-service-meta">${service.entryEmail || 'بدون إيميل مرتبط'}</div>
            </div>
            <div class="invoice-service-name">${formatNumber(service.price || 0)} ${activeInvoice.currency}</div>
        </div>
    `).join('');

    invoiceDetailsGrid.innerHTML = [
        ['رقم الفاتورة', activeInvoice.invoiceNumber],
        ['رقم العميل', `#${formatNumber(activeInvoice.customerNumber)}`],
        ['مدة الاشتراك', formatDuration(activeInvoice.duration)],
        ['نوع الاشتراك', activeInvoice.type === 'private' ? 'خاص' : 'مشترك'],
        ['طريقة الدفع', activeInvoice.paymentMethod === 'أجل' && activeInvoice.paymentStatus === 'paid' ? 'أجل - تم السداد' : activeInvoice.paymentStatus === 'due' ? 'أجل' : activeInvoice.paymentMethod],
        ['حالة السداد', getPaymentStatusLabel(activeInvoice.paymentStatus)],
        ...(activeInvoice.paymentStatus === 'due' ? [['تاريخ الاستحقاق', formatDate(activeInvoice.dueDate || activeInvoice.endDate)]] : []),
        ['الخصم', `${formatNumber(activeInvoice.discount || 0)} ${activeInvoice.currency}`],
        ['الربح المتوقع', `${formatNumber(activeInvoice.profit || 0)} ${activeInvoice.currency}`]
    ].map(([label, value]) => `
        <div class="invoice-detail-item">
            <div class="invoice-detail-label">${label}</div>
            <div class="invoice-detail-value">${value}</div>
        </div>
    `).join('');
}

function buildInvoiceText(subscription) {
    normalizeSubscriptionFinancials(subscription);
    const paidAmount = Math.max(Number(subscription.finalPrice || 0) - Number(subscription.outstandingAmount || 0), 0);
    return [
        `فاتورة اشتراك - ${subscription.invoiceNumber}`,
        `العميل: ${subscription.customerName}`,
        `رقم العميل: #${formatNumber(subscription.customerNumber)}`,
        `الفترة: ${formatDate(subscription.startDate)} إلى ${formatDate(subscription.endDate)}`,
        `الخدمات: ${(subscription.services || []).map((service) => service.name).join('، ')}`,
        `الإجمالي: ${formatNumber(subscription.finalPrice)} ${subscription.currency}`,
        `المدفوع: ${formatNumber(paidAmount)} ${subscription.currency}`,
        `المتبقي: ${formatNumber(subscription.outstandingAmount)} ${subscription.currency}`,
        `طريقة الدفع: ${subscription.paymentMethod === 'أجل' && subscription.paymentStatus === 'paid' ? 'أجل - تم السداد' : subscription.paymentStatus === 'due' ? 'أجل' : subscription.paymentMethod}`,
        ...(subscription.paymentStatus === 'due' ? [`تاريخ الاستحقاق: ${formatDate(subscription.dueDate || subscription.endDate)}`] : []),
        `حالة السداد: ${getPaymentStatusLabel(subscription.paymentStatus)}`
    ].join('\n');
}

async function copyActiveInvoice() {
    const invoice = getActiveInvoice();
    if (!invoice) {
        showToast('لا توجد فاتورة محددة للنسخ.', 'تنبيه', 'warning');
        return;
    }

    await copyToClipboard(buildInvoiceText(invoice), 'الفاتورة');
}

function printActiveInvoice() {
    const invoice = getActiveInvoice();
    if (!invoice) {
        showToast('لا توجد فاتورة محددة للطباعة.', 'تنبيه', 'warning');
        return;
    }

    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) {
        showToast('تعذر فتح نافذة الطباعة.', 'خطأ', 'error');
        return;
    }

    printWindow.document.write(`
        <html lang="ar" dir="rtl">
        <head>
            <title>${invoice.invoiceNumber}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 32px; color: #111827; direction: rtl; }
                h1 { margin-bottom: 8px; }
                .meta { color: #6b7280; margin-bottom: 24px; }
                .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 24px; }
                .box { border: 1px solid #dbe3f0; border-radius: 12px; padding: 14px; }
                .label { color: #6b7280; font-size: 13px; margin-bottom: 6px; }
                .value { font-weight: 700; font-size: 18px; }
                .service { border-bottom: 1px solid #e5e7eb; padding: 12px 0; display:flex; justify-content:space-between; gap:12px; }
            </style>
        </head>
        <body>
            <h1>فاتورة اشتراك</h1>
            <div class="meta">${invoice.invoiceNumber} - ${invoice.customerName}</div>
            <pre style="white-space: pre-wrap; font: inherit;">${buildInvoiceText(invoice)}</pre>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

function deleteActiveInvoice() {
    const invoice = getActiveInvoice();
    if (!invoice) {
        showToast('لا توجد فاتورة محددة للحذف.', 'تنبيه', 'warning');
        return;
    }

    const confirmed = window.confirm(`سيتم حذف الفاتورة ${invoice.invoiceNumber} والاشتراك المرتبط بها. هل تريد المتابعة؟`);
    if (!confirmed) {
        return;
    }

    const subscriptionIndex = appState.subscriptionRecords.findIndex((item) => item.id === invoice.id);
    if (subscriptionIndex === -1) {
        showToast('تعذر العثور على الفاتورة المحددة.', 'خطأ', 'error');
        return;
    }

    const removedSubscription = removeSubscriptionRecord(invoice.id);
    if (!removedSubscription) {
        showToast('تعذر العثور على الفاتورة المحددة.', 'خطأ', 'error');
        return;
    }

    syncTotals();
    saveAppState();
    renderDashboard();
    renderServices();
    renderSubscriptions();
    renderPayments();
    renderInvoices();
    showToast(`تم حذف الفاتورة "${removedSubscription.invoiceNumber || removedSubscription.id}".`, 'الفواتير', 'success');
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

function setActivePage(pageName) {
    if (pageName !== 'services') {
        closeServiceDetailsPage();
    }

    pages.forEach((page) => page.classList.remove('active'));
    navItems.forEach((item) => item.classList.remove('active'));

    const activePage = document.getElementById(pageName);
    const activeNavItem = document.querySelector(`[data-page="${pageName}"]`);

    if (activePage) {
        activePage.classList.add('active');
    }

    if (activeNavItem) {
        activeNavItem.classList.add('active');
        document.querySelector('.page-title').textContent = activeNavItem.querySelector('.nav-label').textContent;
    }

    if (pageName === 'payments') {
        renderPayments();
    }

    if (pageName === 'invoices') {
        renderInvoices();
    }

    if (pageName === 'reports') {
        renderReports();
    }
}

function renderDashboard() {
    const dashboardCurrency = appState.activeDashboardCurrency || appState.currency;
    const rate = getCurrencyRate(dashboardCurrency);

    updateStat('revenue', formatMoneyByCurrency(appState.totals.revenue * rate, dashboardCurrency));
    updateStat('profit', formatMoneyByCurrency(appState.totals.profit * rate, dashboardCurrency));
    updateStat('subscriptions', formatCount(appState.totals.subscriptions));
    updateStat('expiring', formatCount(appState.totals.expiring));
    updateStat('customers', formatCount(appState.totals.customers));
    updateStat('services', formatCount(appState.totals.services));

    const balance = Math.max(appState.totals.balance, 0) * rate;
    const income = appState.totals.income * rate;
    const expenses = appState.totals.expenses * rate;

    document.querySelector('[data-summary="balance"]').textContent = formatNumber(balance);
    document.querySelector('[data-summary="income"]').textContent = `+${formatNumber(income)} ${dashboardCurrency}`;
    document.querySelector('[data-summary="expenses"]').textContent = `${formatNumber(expenses)} ${dashboardCurrency}`;
    document.querySelector('[data-summary="currency"]').textContent = dashboardCurrency;
    document.querySelector('[data-summary="currency-unit"]').textContent = dashboardCurrency;

    renderDashboardDetailLists(dashboardCurrency);
}

function renderDashboardDetailLists(dashboardCurrency = appState.activeDashboardCurrency || appState.currency) {
    if (!dashboardOverdueList || !dashboardRenewalsList || !dashboardRenewalsCount) {
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const overdueRecords = (appState.subscriptionRecords || [])
        .filter((item) => item.paymentStatus === 'partial' || item.paymentStatus === 'due')
        .map((item) => ({
            ...item,
            dueAmount: getSubscriptionDueAmount(item, dashboardCurrency),
            dashboardCurrency
        }))
        .sort((a, b) => b.dueAmount - a.dueAmount);

    const renewalRecords = (appState.subscriptionRecords || [])
        .map((item) => {
            const endDate = new Date(item.endDate);
            endDate.setHours(0, 0, 0, 0);
            const diffDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
            return {
                ...item,
                diffDays,
                dashboardCurrency
            };
        })
        .filter((item) => item.diffDays >= 0 && item.diffDays <= 7)
        .sort((a, b) => a.diffDays - b.diffDays);

    dashboardOverdueList.innerHTML = overdueRecords.length
        ? overdueRecords.slice(0, 5).map((item) => createDashboardOverdueItem(item)).join('')
        : '<div class="empty-search">لا توجد دفعات متأخرة حاليًا.</div>';

    dashboardRenewalsList.innerHTML = renewalRecords.length
        ? renewalRecords.slice(0, 5).map((item) => createDashboardRenewalItem(item)).join('')
        : '<div class="empty-search">لا توجد تجديدات قريبة حاليًا.</div>';

    dashboardRenewalsCount.textContent = `${formatNumber(renewalRecords.length)} تجديدات`;
}

function createDashboardOverdueItem(item) {
    const customerInitial = getCustomerInitials(item.customerName || 'ع');
    return `
        <article class="dashboard-detail-item">
            <div>
                <div class="dashboard-detail-amount">${formatDashboardMoney(item.dueAmount, item.dashboardCurrency || appState.activeDashboardCurrency || appState.currency)}</div>
                <small>كان موعده: ${formatDate(item.endDate)}</small>
            </div>
            <div class="dashboard-detail-meta">
                <strong>${item.customerName}</strong>
                <small>${getOverdueStatusText(item)}</small>
            </div>
            <div class="dashboard-detail-avatar">${customerInitial}</div>
        </article>
    `;
}

function createDashboardRenewalItem(item) {
    return `
        <article class="dashboard-detail-item">
            <div>
                <div class="dashboard-detail-amount renewal-amount">${formatDashboardMoney(item.finalPrice || item.totalPrice || 0, item.dashboardCurrency || appState.activeDashboardCurrency || appState.currency)}</div>
                <small>${getRenewalStatusText(item.diffDays)}</small>
            </div>
            <div class="dashboard-detail-meta">
                <strong>${item.customerName}</strong>
                <small>${item.services.map((service) => service.name).join(' - ')}</small>
            </div>
            <div class="dashboard-detail-avatar">🗓</div>
        </article>
    `;
}

function getSubscriptionDueAmount(item, targetCurrency = appState.activeDashboardCurrency || appState.currency) {
    normalizeSubscriptionFinancials(item);
    return convertCurrencyAmount(item.outstandingAmount || 0, item.currency, targetCurrency);
}

function formatDashboardMoney(value, currency = appState.activeDashboardCurrency || appState.currency) {
    return `${formatNumber(Number(value || 0))} ${currency}`;
}

function getOverdueStatusText(item) {
    const targetDate = new Date(item.dueDate || item.endDate);
    targetDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffDays = Math.max(Math.ceil((today - targetDate) / (1000 * 60 * 60 * 24)), 0);
    return diffDays ? `متأخر ${formatNumber(diffDays)} يوم` : 'مستحق اليوم';
}

function getRenewalStatusText(diffDays) {
    if (diffDays <= 0) {
        return 'اليوم';
    }

    if (diffDays === 1) {
        return 'غدًا';
    }

    return `${formatNumber(diffDays)} أيام متبقية`;
}

function updateStat(key, value) {
    const element = document.querySelector(`[data-stat="${key}"]`);
    if (element) {
        element.textContent = value;
    }
}

function formatMoney(value) {
    return `${formatNumber(value)} ${appState.currency}`;
}

function formatCount(value) {
    return formatNumber(value);
}

function formatNumber(value) {
    return Number(value || 0).toLocaleString('ar-SA', {
        maximumFractionDigits: 0
    });
}

function handleRefresh(button) {
    const icon = button?.querySelector('.btn-icon');

    if (icon) {
        icon.style.animation = 'spin 0.8s linear';
    }

    setTimeout(() => {
        if (icon) {
            icon.style.animation = '';
        }

        renderDashboard();
        showToast('تم تحديث العرض الحالي للبيانات.', 'تحديث', 'success');
        logEvent('refresh_dashboard', { currency: appState.currency, items: appState.items.length });
    }, 500);
}

function submitAddItem() {
    const nameField = document.getElementById('itemName');
    const descriptionField = document.getElementById('itemDescription');
    const priceField = document.getElementById('itemPrice');

    const name = nameField.value.trim();
    const description = descriptionField.value.trim();
    const price = Number(priceField.value);

    if (!name || !description || !priceField.value.trim()) {
        showToast('يرجى ملء جميع الحقول قبل الإضافة.', 'خطأ', 'error');
        return;
    }

    if (Number.isNaN(price) || price <= 0) {
        showToast('يرجى إدخال سعر صحيح أكبر من صفر.', 'خطأ', 'error');
        return;
    }

    const item = {
        id: Date.now(),
        name,
        description,
        price
    };

    appState.items.push(item);
    appState.totals.revenue += price;
    appState.totals.profit += Math.round(price * 0.7);
    appState.totals.subscriptions += 1;
    appState.totals.expiring += 1;
    appState.totals.services += 1;
    appState.totals.income += price;
    appState.totals.expenses += Math.round(price * 0.3);
    appState.totals.balance = appState.totals.income - appState.totals.expenses;

    renderDashboard();
    prependNotification('success', 'تمت إضافة عنصر جديد', `تمت إضافة "${name}" بقيمة ${formatNumber(price)} ر.س.`);
    closeModal('addModal');
    clearFormFields();
    saveAppState();
    showToast(`تمت إضافة "${name}" بنجاح.`, 'إضافة', 'success');
    logEvent('add_item', item);
}

function confirmDelete() {
    if (!appState.items.length) {
        closeModal('deleteModal');
        showToast('لا توجد عناصر مضافة لحذفها.', 'تنبيه', 'warning');
        return;
    }

    const removedItem = appState.items.pop();

    appState.totals.revenue = Math.max(appState.totals.revenue - removedItem.price, 0);
    appState.totals.profit = Math.max(appState.totals.profit - Math.round(removedItem.price * 0.7), 0);
    appState.totals.subscriptions = Math.max(appState.totals.subscriptions - 1, 0);
    appState.totals.expiring = Math.max(appState.totals.expiring - 1, 0);
    appState.totals.services = Math.max(appState.totals.services - 1, 0);
    appState.totals.income = Math.max(appState.totals.income - removedItem.price, 0);
    appState.totals.expenses = Math.max(appState.totals.expenses - Math.round(removedItem.price * 0.3), 0);
    appState.totals.balance = Math.max(appState.totals.income - appState.totals.expenses, 0);

    renderDashboard();
    prependNotification('info', 'تم حذف آخر عنصر', `تم حذف "${removedItem.name}" من العدادات الحالية.`);
    closeModal('deleteModal');
    saveAppState();
    showToast(`تم حذف "${removedItem.name}".`, 'حذف', 'success');
    logEvent('delete_item', removedItem);
}

function clearFormFields() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemDescription').value = '';
    document.getElementById('itemPrice').value = '';
}

function submitCustomer() {
    const firstName = document.getElementById('customerFirstName').value.trim();
    const lastName = document.getElementById('customerLastName').value.trim();
    const countryCode = document.getElementById('customerCountryCode').value.trim();
    const phoneNumber = document.getElementById('customerPhoneNumber').value.trim();
    const fullPhone = document.getElementById('customerFullPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();

    if (!firstName || !lastName) {
        showToast('يرجى إدخال الاسم الأول والاسم الأخير.', 'خطأ', 'error');
        return;
    }

    const normalizedPhone = normalizePhone(countryCode, phoneNumber, fullPhone);
    if (!normalizedPhone) {
        showToast('أدخل رقم العميل عبر رمز الدولة مع الرقم، أو أدخل الرقم كاملًا.', 'خطأ', 'error');
        return;
    }

    if (email && !isValidEmail(email)) {
        showToast('صيغة البريد الإلكتروني غير صحيحة.', 'خطأ', 'error');
        return;
    }

    const fullName = `${firstName} ${lastName}`;
    const existingCustomer = appState.customerRecords.find((customer) => customer.id === appState.editingCustomerId);

    if (existingCustomer) {
        existingCustomer.firstName = firstName;
        existingCustomer.lastName = lastName;
        existingCustomer.fullName = fullName;
        existingCustomer.phone = normalizedPhone;
        existingCustomer.email = email || 'غير مضاف';

        renderCustomers();
        renderPayments();
        renderInvoices();
        closeModal('customerModal');
        clearCustomerForm();
        saveAppState();
        showToast(`تم تعديل العميل "${fullName}".`, 'العملاء', 'success');
        prependNotification('info', 'تم تعديل عميل', `تم تحديث بيانات "${fullName}".`);
        logEvent('edit_customer', existingCustomer);
        return;
    }

    appState.customerSequence += 1;

    const customer = {
        id: Date.now(),
        customerNumber: appState.customerSequence,
        firstName,
        lastName,
        fullName,
        phone: normalizedPhone,
        email: email || 'غير مضاف',
        status: 'active',
        manualDebtBalance: 0,
        paymentHistory: []
    };

    appState.customerRecords.unshift(customer);
    appState.totals.customers = appState.customerRecords.length;
    renderCustomers();
    renderDashboard();
    renderPayments();
    renderInvoices();
    prependNotification('success', 'تمت إضافة عميل', `تم حفظ العميل "${customer.fullName}" بنجاح.`);
    closeModal('customerModal');
    clearCustomerForm();
    saveAppState();
    showToast(`تمت إضافة العميل "${customer.fullName}".`, 'العملاء', 'success');
    logEvent('add_customer', customer);
}

function normalizePhone(countryCode, phoneNumber, fullPhone) {
    if (fullPhone) {
        const cleanedFullPhone = fullPhone.replace(/[^\d+]/g, '');
        return cleanedFullPhone || null;
    }

    if (!countryCode || !phoneNumber) {
        return null;
    }

    const cleanedCode = countryCode.replace(/[^\d+]/g, '');
    const cleanedPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanedCode || !cleanedPhone) {
        return null;
    }

    const normalizedCode = cleanedCode.startsWith('+') ? cleanedCode : `+${cleanedCode}`;
    return `${normalizedCode}${cleanedPhone}`;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function openSubscriptionModalForCreate() {
    clearSubscriptionForm();
    openModal('subscriptionModal');
}

function openSubscriptionModalForEdit(subscriptionId) {
    const record = appState.subscriptionRecords.find((item) => Number(item.id) === Number(subscriptionId));
    if (!record) {
        showToast('تعذر العثور على الاشتراك المطلوب.', 'خطأ', 'error');
        return;
    }

    normalizeSubscriptionFinancials(record);
    clearSubscriptionForm();
    appState.editingSubscriptionId = record.id;
    subscriptionModalTitle.textContent = 'تعديل الاشتراك';
    submitSubscriptionBtn.textContent = 'حفظ التعديلات';
    subscriptionCustomerSearch.value = record.customerName || '';
    populateSubscriptionCustomerOptions();
    subscriptionCustomerSelect.value = String(record.customerId);
    subscriptionDuration.value = String(record.duration || 1);
    populateCurrencySelect(subscriptionCurrency, record.currency || appState.currency);
    subscriptionType.value = record.type || 'private';
    subscriptionPrivateEmail.value = record.privateEmail || '';
    subscriptionDiscount.value = String(record.discount || 0);
    subscriptionStartDate.value = record.startDate || new Date().toISOString().slice(0, 10);
    subscriptionAutoRenew.checked = Boolean(record.autoRenew);
    appState.subscriptionPaymentStatus = record.paymentStatus || 'paid';
    appState.subscriptionPaymentMethod = record.paymentMethod === 'أجل' ? 'ون كاش' : (record.paymentMethod || 'ون كاش');
    appState.subscriptionDueOption = record.dueOption || '1';
    if (subscriptionCustomDueDate) {
        subscriptionCustomDueDate.value = record.dueDate || '';
    }
    subscriptionServiceRows.innerHTML = '';
    (record.services || []).forEach((serviceItem) => addSubscriptionServiceRow(serviceItem));
    if (!subscriptionServiceRows.children.length) {
        addSubscriptionServiceRow();
    }
    updateSubscriptionTypeVisibility();
    syncSubscriptionChoiceButtons();
    updateSubscriptionDates();
    if (record.endDate) {
        subscriptionEndDate.value = record.endDate;
    }
    updateSubscriptionSummary();
    openModal('subscriptionModal');
}

function clearSubscriptionForm() {
    appState.editingSubscriptionId = null;
    appState.subscriptionPaymentStatus = 'paid';
    appState.subscriptionPaymentMethod = 'ون كاش';
    appState.subscriptionDueOption = '1';
    subscriptionModalTitle.textContent = 'إضافة اشتراك جديد';
    submitSubscriptionBtn.textContent = 'إضافة الاشتراك';
    subscriptionCustomerSearch.value = '';
    subscriptionCustomerSelect.innerHTML = '<option value="">اختر العميل</option>';
    subscriptionDuration.value = '1';
    populateCurrencySelect(subscriptionCurrency, appState.currency);
    subscriptionType.value = 'private';
    subscriptionPrivateEmail.value = '';
    subscriptionDiscount.value = '0';
    subscriptionStartDate.value = new Date().toISOString().slice(0, 10);
    if (subscriptionCustomDueDate) {
        subscriptionCustomDueDate.value = '';
    }
    subscriptionAutoRenew.checked = true;
    subscriptionServiceRows.innerHTML = '';
    addSubscriptionServiceRow();
    populateSubscriptionCustomerOptions();
    updateSubscriptionTypeVisibility();
    syncSubscriptionChoiceButtons();
    updateSubscriptionDates();
    updateSubscriptionSummary();
}

function populateSubscriptionCustomerOptions() {
    if (!subscriptionCustomerSelect) {
        return;
    }

    const searchValue = subscriptionCustomerSearch.value.trim().toLowerCase();
    const currentValue = subscriptionCustomerSelect.value;
    subscriptionCustomerSelect.innerHTML = '<option value="">اختر العميل</option>';

    appState.customerRecords
        .filter((customer) => {
            if (!searchValue) {
                return true;
            }
            return [customer.fullName, customer.phone, String(customer.customerNumber)]
                .some((value) => String(value).toLowerCase().includes(searchValue));
        })
        .forEach((customer) => {
            const option = document.createElement('option');
            option.value = String(customer.id);
            option.textContent = `${customer.fullName} - ${customer.phone}`;
            subscriptionCustomerSelect.appendChild(option);
        });

    if (currentValue) {
        subscriptionCustomerSelect.value = currentValue;
    }
}

function updateSubscriptionTypeVisibility() {
    subscriptionEmailGroup.style.display = subscriptionType.value === 'private' ? 'block' : 'none';
}

function syncSubscriptionChoiceButtons() {
    paymentStatusButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.paymentStatus === appState.subscriptionPaymentStatus);
    });
    paymentMethodButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.paymentMethod === appState.subscriptionPaymentMethod);
    });
    subscriptionDueOptionButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.dueOption === appState.subscriptionDueOption);
    });

    const isDue = appState.subscriptionPaymentStatus === 'due';
    if (subscriptionMethodGroup) {
        subscriptionMethodGroup.style.display = isDue ? 'none' : 'grid';
    }
    if (subscriptionDueSettings) {
        subscriptionDueSettings.style.display = isDue ? 'block' : 'none';
    }
    if (subscriptionCustomDueDateGroup) {
        subscriptionCustomDueDateGroup.style.display = isDue && appState.subscriptionDueOption === 'custom' ? 'block' : 'none';
    }
}

function addSubscriptionServiceRow(item = null) {
    const row = document.createElement('div');
    row.className = 'subscription-service-row';
    row.innerHTML = `
        <button class="subscription-service-delete" type="button">🗑️</button>
        <div class="subscription-service-fields">
            <select class="subscription-service-select">
                <option value="">اختر خدمة أو أدخل يدويًا</option>
                ${appState.serviceRecords.map((service) => `<option value="${service.id}">${service.name}</option>`).join('')}
            </select>
            <input class="subscription-service-price" type="number" min="0" step="0.01" placeholder="السعر">
            <input class="subscription-service-cost" type="number" min="0" step="0.01" placeholder="التكلفة">
        </div>
        <div class="subscription-service-availability" style="display: none;"></div>
    `;

    subscriptionServiceRows.appendChild(row);

    const serviceSelect = row.querySelector('.subscription-service-select');
    const priceInput = row.querySelector('.subscription-service-price');
    const costInput = row.querySelector('.subscription-service-cost');
    const deleteBtn = row.querySelector('.subscription-service-delete');
    const availability = row.querySelector('.subscription-service-availability');

    if (item) {
        serviceSelect.value = item.serviceId ? String(item.serviceId) : '';
        priceInput.value = item.price ?? '';
        costInput.value = item.cost ?? '';
        row.dataset.selectedEntryId = item.entryId || '';
    }

    serviceSelect.addEventListener('change', () => {
        fillSubscriptionServiceRow(row);
        updateSubscriptionSummary();
    });
    priceInput.addEventListener('input', updateSubscriptionSummary);
    costInput.addEventListener('input', updateSubscriptionSummary);
    deleteBtn.addEventListener('click', () => {
        row.remove();
        if (!subscriptionServiceRows.children.length) {
            addSubscriptionServiceRow();
        }
        updateSubscriptionSummary();
    });

    if (!item) {
        fillSubscriptionServiceRow(row);
    } else if (availability) {
        renderSubscriptionServiceAvailability(row);
    }
}

function fillSubscriptionServiceRow(row) {
    const serviceSelect = row.querySelector('.subscription-service-select');
    const priceInput = row.querySelector('.subscription-service-price');
    const costInput = row.querySelector('.subscription-service-cost');
    const service = appState.serviceRecords.find((item) => item.id === Number(serviceSelect.value));
    if (!service) {
        return;
    }

    const duration = String(subscriptionDuration.value || '1');
    const pricing = service.durationPricing?.[duration];
    priceInput.value = pricing?.sell ?? service.price ?? 0;
    costInput.value = pricing?.cost ?? 0;
    renderSubscriptionServiceAvailability(row);
}

function renderSubscriptionServiceAvailability(row) {
    const availability = row.querySelector('.subscription-service-availability');
    const serviceSelect = row.querySelector('.subscription-service-select');
    if (!availability || !serviceSelect.value) {
        if (availability) {
            availability.style.display = 'none';
            availability.innerHTML = '';
        }
        return;
    }

    const service = appState.serviceRecords.find((item) => item.id === Number(serviceSelect.value));
    if (!service) {
        availability.style.display = 'none';
        availability.innerHTML = '';
        return;
    }

    const isSharedView = subscriptionType.value === 'shared' && service.type === 'shared';
    const isPrivateView = subscriptionType.value === 'private' && service.type === 'private';

    if (!isSharedView && !isPrivateView) {
        availability.style.display = 'none';
        availability.innerHTML = '';
        return;
    }

    const entries = isSharedView
        ? (service.emailEntries || []).map((entry) => ({
            id: entry.id,
            email: entry.email,
            meta: `الحساب المشترك`,
            count: entry.customers?.length || 0
        }))
        : (service.privateAccounts || []).map((entry) => ({
            id: entry.id,
            email: entry.email,
            meta: `الحساب الخاص`,
            count: 1
        }));

    if (!entries.length) {
        availability.style.display = 'block';
        availability.innerHTML = '<div class="empty-search">لا توجد حسابات/إيميلات متاحة داخل هذه الخدمة بعد.</div>';
        return;
    }

    availability.style.display = 'block';
    availability.innerHTML = `
        <div class="subscription-availability-title">${isSharedView ? 'الإيميل / السلوت المتاح' : 'الحسابات المتاحة'}</div>
        <div class="subscription-availability-list">
            ${entries.map((entry) => `
                <button class="subscription-slot-card ${String(row.dataset.selectedEntryId || '') === String(entry.id) ? 'active' : ''}" type="button" data-slot-entry="${entry.id}">
                    <div class="subscription-slot-email">${entry.email}</div>
                    <div class="subscription-slot-meta">${entry.meta}</div>
                    <div class="subscription-slot-count">Subscribers: ${entry.count}</div>
                </button>
            `).join('')}
        </div>
    `;

    availability.querySelectorAll('[data-slot-entry]').forEach((button) => {
        button.addEventListener('click', () => {
            row.dataset.selectedEntryId = button.dataset.slotEntry;
            renderSubscriptionServiceAvailability(row);
        });
    });
}

function syncSubscriptionServicePrices() {
    subscriptionServiceRows.querySelectorAll('.subscription-service-row').forEach((row) => {
        fillSubscriptionServiceRow(row);
    });
    updateSubscriptionSummary();
}

function syncSubscriptionServiceAvailability() {
    subscriptionServiceRows.querySelectorAll('.subscription-service-row').forEach((row) => {
        renderSubscriptionServiceAvailability(row);
    });
}

function updateSubscriptionSummary() {
    const rows = [...subscriptionServiceRows.querySelectorAll('.subscription-service-row')];
    const totalPrice = rows.reduce((sum, row) => sum + Number(row.querySelector('.subscription-service-price')?.value || 0), 0);
    const totalCost = rows.reduce((sum, row) => sum + Number(row.querySelector('.subscription-service-cost')?.value || 0), 0);
    const discount = Number(subscriptionDiscount.value || 0);
    const finalPrice = Math.max(totalPrice - discount, 0);
    const profit = finalPrice - totalCost;
    const currency = subscriptionCurrency.value || appState.currency;

    subscriptionTotalPrice.textContent = `${formatNumber(totalPrice)} ${currency}`;
    subscriptionFinalPrice.textContent = `${formatNumber(finalPrice)} ${currency}`;
    subscriptionTotalCost.textContent = `${formatNumber(totalCost)} ${currency}`;
    subscriptionExpectedProfit.textContent = `${formatNumber(profit)} ${currency}`;
}

function updateSubscriptionDates() {
    if (!subscriptionStartDate.value) {
        return;
    }
    const start = new Date(subscriptionStartDate.value);
    const end = new Date(start);
    end.setMonth(end.getMonth() + Number(subscriptionDuration.value || 1));
    subscriptionEndDate.value = end.toISOString().slice(0, 10);
}

function getDueDateFromSelection(startDateValue) {
    const startDate = new Date(startDateValue || new Date().toISOString().slice(0, 10));
    const dueDate = new Date(startDate);

    if (appState.subscriptionDueOption === 'custom') {
        return subscriptionCustomDueDate?.value || '';
    }

    dueDate.setDate(dueDate.getDate() + Number(appState.subscriptionDueOption || 1));
    return dueDate.toISOString().slice(0, 10);
}

function removeSubscriptionRecord(subscriptionId) {
    const subscriptionIndex = appState.subscriptionRecords.findIndex((item) => Number(item.id) === Number(subscriptionId));
    if (subscriptionIndex === -1) {
        return null;
    }

    const [removedSubscription] = appState.subscriptionRecords.splice(subscriptionIndex, 1);
    const customer = appState.customerRecords.find((item) => item.id === removedSubscription.customerId);
    if (customer) {
        normalizeCustomerFinancials(customer);
        customer.paymentHistory = customer.paymentHistory.filter((entry) => {
            if (Number(entry.invoiceId || 0) === Number(removedSubscription.id)) {
                return false;
            }
            if (Array.isArray(entry.subscriptionAllocations)) {
                return !entry.subscriptionAllocations.some((allocation) => Number(allocation.subscriptionId) === Number(removedSubscription.id));
            }
            return true;
        });
        customer.manualDebtBalance = getCustomerManualDebtBase(customer);
    }

    appState.activeInvoiceId = appState.subscriptionRecords[0]?.id || null;
    appState.totals.subscriptions = appState.subscriptionRecords.length;
    return removedSubscription;
}

function deleteSubscriptionRecord(subscriptionId) {
    const subscription = appState.subscriptionRecords.find((item) => Number(item.id) === Number(subscriptionId));
    if (!subscription) {
        showToast('تعذر العثور على الاشتراك المحدد.', 'خطأ', 'error');
        return;
    }

    const confirmed = window.confirm(`سيتم حذف اشتراك "${subscription.customerName}" وكل ما يرتبط بفاتورته ومدفوعاته. هل تريد المتابعة؟`);
    if (!confirmed) {
        return;
    }

    const removedSubscription = removeSubscriptionRecord(subscriptionId);
    if (!removedSubscription) {
        showToast('تعذر حذف الاشتراك المحدد.', 'خطأ', 'error');
        return;
    }

    saveAppState();
    renderDashboard();
    renderServices();
    renderSubscriptions();
    renderInvoices();
    renderPayments();
    showToast(`تم حذف اشتراك "${removedSubscription.customerName}".`, 'الاشتراكات', 'success');
}

function submitSubscription() {
    const customerId = Number(subscriptionCustomerSelect.value);
    const customer = appState.customerRecords.find((item) => item.id === customerId);
    if (!customer) {
        showToast('اختر العميل أولًا.', 'خطأ', 'error');
        return;
    }

    const services = [...subscriptionServiceRows.querySelectorAll('.subscription-service-row')]
        .map((row) => {
            const serviceId = Number(row.querySelector('.subscription-service-select')?.value || 0);
            const service = appState.serviceRecords.find((item) => item.id === serviceId);
            const selectedEntryId = Number(row.dataset.selectedEntryId || 0);
            const entry = service?.type === 'shared'
                ? (service.emailEntries || []).find((item) => item.id === selectedEntryId)
                : (service?.privateAccounts || []).find((item) => item.id === selectedEntryId);
            return {
                serviceId: serviceId || null,
                name: service?.name || 'خدمة يدوية',
                price: Number(row.querySelector('.subscription-service-price')?.value || 0),
                cost: Number(row.querySelector('.subscription-service-cost')?.value || 0),
                entryId: selectedEntryId || null,
                entryEmail: entry?.email || ''
            };
        })
        .filter((item) => item.price > 0 || item.cost > 0 || item.serviceId);

    if (!services.length) {
        showToast('أضف خدمة واحدة على الأقل داخل الاشتراك.', 'خطأ', 'error');
        return;
    }

    if (subscriptionType.value === 'private' && subscriptionPrivateEmail.value && !isValidEmail(subscriptionPrivateEmail.value.trim())) {
        showToast('صيغة إيميل الاشتراك الخاص غير صحيحة.', 'خطأ', 'error');
        return;
    }

    const totalPrice = services.reduce((sum, item) => sum + item.price, 0);
    const totalCost = services.reduce((sum, item) => sum + item.cost, 0);
    const discount = Number(subscriptionDiscount.value || 0);
    const finalPrice = Math.max(totalPrice - discount, 0);
    const initialPaidAmount = appState.subscriptionPaymentStatus === 'paid' ? finalPrice : 0;
    const initialOutstandingAmount = Math.max(finalPrice - initialPaidAmount, 0);
    const dueDate = appState.subscriptionPaymentStatus === 'due' ? getDueDateFromSelection(subscriptionStartDate.value) : '';

    if (appState.subscriptionPaymentStatus === 'due' && !dueDate) {
        showToast('حدد مهلة السداد أو اختر تاريخًا صحيحًا للأجل.', 'خطأ', 'error');
        return;
    }

    const existingRecord = appState.subscriptionRecords.find((item) => Number(item.id) === Number(appState.editingSubscriptionId));
    const record = {
        id: existingRecord?.id || Date.now(),
        customerId: customer.id,
        customerName: customer.fullName,
        customerNumber: customer.customerNumber,
        duration: Number(subscriptionDuration.value || 1),
        currency: subscriptionCurrency.value || appState.currency,
        type: subscriptionType.value,
        privateEmail: subscriptionPrivateEmail.value.trim(),
        services,
        discount,
        paymentStatus: appState.subscriptionPaymentStatus,
        paymentMethod: appState.subscriptionPaymentStatus === 'due' ? 'أجل' : appState.subscriptionPaymentMethod,
        dueOption: appState.subscriptionPaymentStatus === 'due' ? appState.subscriptionDueOption : '',
        dueDate,
        totalPrice,
        finalPrice,
        paidAmount: initialPaidAmount,
        outstandingAmount: initialOutstandingAmount,
        totalCost,
        profit: finalPrice - totalCost,
        startDate: subscriptionStartDate.value,
        endDate: subscriptionEndDate.value,
        autoRenew: subscriptionAutoRenew.checked,
        invoiceNumber: existingRecord?.invoiceNumber
    };

    if (existingRecord) {
        record.paidAmount = Math.min(Number(existingRecord.paidAmount || 0), finalPrice);
        record.outstandingAmount = Math.max(finalPrice - record.paidAmount, 0);
        record.paymentStatus = getPaymentStatusFromOutstanding(record.outstandingAmount, finalPrice);
        record.paymentMethod = record.paymentStatus === 'due'
            ? 'أجل'
            : (existingRecord.paymentMethod === 'أجل' && record.paymentStatus === 'paid'
                ? 'أجل'
                : appState.subscriptionPaymentMethod);
    }

    syncSubscriptionCustomerLinks(record, customer);
    if (existingRecord) {
        const recordIndex = appState.subscriptionRecords.findIndex((item) => Number(item.id) === Number(existingRecord.id));
        appState.subscriptionRecords.splice(recordIndex, 1, record);
    } else {
        appState.subscriptionRecords.unshift(record);
    }
    appState.totals.subscriptions = appState.subscriptionRecords.length;
    saveAppState();
    renderDashboard();
    renderServices();
    if (appState.activeServiceId) {
        renderActiveServiceEntries();
    }
    renderSubscriptions();
    appState.activeInvoiceId = record.id;
    renderInvoices();
    renderPayments();
    closeModal('subscriptionModal');
    clearSubscriptionForm();
    showToast(`تمت إضافة اشتراك "${customer.fullName}".`, 'الاشتراكات', 'success');
}

function syncSubscriptionCustomerLinks(subscription, customer) {
    subscription.services.forEach((serviceItem) => {
        const service = appState.serviceRecords.find((item) => item.id === serviceItem.serviceId);
        if (!service) {
            return;
        }

        if (service.type === 'shared' && serviceItem.entryId) {
            normalizeSharedService(service);
            const entry = service.emailEntries.find((item) => item.id === serviceItem.entryId);
            if (!entry) {
                return;
            }

            if (!entry.customers.some((item) => item.id === customer.id)) {
                entry.customers.push({
                    id: customer.id,
                    fullName: customer.fullName,
                    phone: customer.phone,
                    email: customer.email
                });
            }
        }

        if (service.type === 'private' && subscription.privateEmail) {
            normalizePrivateService(service);
            const existingAccount = service.privateAccounts.find((item) => item.email.toLowerCase() === subscription.privateEmail.toLowerCase());

            if (!existingAccount) {
                service.privateAccounts.unshift({
                    id: Date.now() + Math.floor(Math.random() * 1000),
                    email: subscription.privateEmail,
                    password: ''
                });
            }
        }
    });
}

function renderSubscriptions() {
    reconcileSubscriptionsFromPayments();
    if (!subscriptionsTableBody || !subscriptionsEmptyState) {
        return;
    }

    subscriptionsTableBody.querySelectorAll('.subscription-row, .empty-search').forEach((item) => item.remove());
    const today = new Date();
    const records = (appState.subscriptionRecords || []).map((item) => {
        normalizeSubscriptionFinancials(item);
        return item;
    });

    const active = records.filter((item) => new Date(item.endDate) >= today).length;
    const ending = records.filter((item) => {
        const diff = (new Date(item.endDate) - today) / (1000 * 60 * 60 * 24);
        return diff >= 0 && diff <= 7;
    }).length;
    const expired = records.filter((item) => new Date(item.endDate) < today).length;
    const partial = records.filter((item) => item.paymentStatus !== 'paid').length;
    const debt = records.reduce((sum, item) => {
        normalizeSubscriptionFinancials(item);
        return sum + convertCurrencyAmount(item.outstandingAmount || 0, item.currency, appState.currency);
    }, 0);

    subscriptionsActiveCount.textContent = formatNumber(active);
    subscriptionsEndingCount.textContent = formatNumber(ending);
    subscriptionsExpiredCount.textContent = formatNumber(expired);
    subscriptionsPartialCount.textContent = formatNumber(partial);
    subscriptionsDebtValue.textContent = `${formatNumber(debt)} ${appState.currency}`;

    let filtered = records;
    if (appState.activeSubscriptionFilter === 'active') {
        filtered = records.filter((item) => new Date(item.endDate) >= today);
    }
    if (appState.activeSubscriptionFilter === 'ending') {
        filtered = records.filter((item) => {
            const diff = (new Date(item.endDate) - today) / (1000 * 60 * 60 * 24);
            return diff >= 0 && diff <= 7;
        });
    }
    if (appState.activeSubscriptionFilter === 'expired') {
        filtered = records.filter((item) => new Date(item.endDate) < today);
    }

    if (!filtered.length) {
        subscriptionsEmptyState.style.display = 'block';
        return;
    }

    subscriptionsEmptyState.style.display = 'none';

    filtered.forEach((item) => {
        const row = document.createElement('article');
        row.className = 'subscription-row';
        row.innerHTML = `
            <div class="subscription-customer-cell">
                <div class="subscription-avatar">${getCustomerInitials(item.customerName)}</div>
                <div>
                    <div class="subscription-customer-name">${item.customerName}</div>
                    <div class="subscription-customer-meta">#${item.customerNumber}</div>
                </div>
            </div>
            <div class="subscription-service-cell">${item.services.map((service) => service.name).join(' ، ')}</div>
            <div class="subscription-date-cell">${formatDate(item.startDate)} - ${formatDate(item.endDate)}</div>
            <div><span class="subscription-status-badge ${getSubscriptionStatusClass(item)}">${getSubscriptionStatusLabel(item)}</span></div>
            <div class="subscription-payment-cell">
                <span class="subscription-payment-badge ${item.paymentStatus}">${getPaymentStatusLabel(item.paymentStatus)}</span>
                <small>${getSubscriptionPaymentMeta(item)}</small>
            </div>
            <div class="subscription-actions-cell">
                <button class="subscription-action-btn edit" type="button" data-subscription-edit="${item.id}">تعديل</button>
                <button class="subscription-action-btn delete" type="button" data-subscription-delete="${item.id}">حذف</button>
            </div>
        `;
        subscriptionsTableBody.appendChild(row);
    });

    subscriptionsTableBody.querySelectorAll('[data-subscription-edit]').forEach((button) => {
        button.addEventListener('click', () => {
            openSubscriptionModalForEdit(Number(button.dataset.subscriptionEdit));
        });
    });

    subscriptionsTableBody.querySelectorAll('[data-subscription-delete]').forEach((button) => {
        button.addEventListener('click', () => {
            deleteSubscriptionRecord(Number(button.dataset.subscriptionDelete));
        });
    });
}

function getSubscriptionStatusLabel(item) {
    const diff = (new Date(item.endDate) - new Date()) / (1000 * 60 * 60 * 24);
    if (diff < 0) return 'منتهي';
    if (diff <= 7) return 'قريب من الانتهاء';
    return 'نشط';
}

function getSubscriptionStatusClass(item) {
    const diff = (new Date(item.endDate) - new Date()) / (1000 * 60 * 60 * 24);
    if (diff < 0) return 'expired';
    if (diff <= 7) return 'ending';
    return 'active';
}

function getPaymentStatusLabel(status) {
    if (status === 'partial') return 'دفع جزئي';
    if (status === 'due') return 'أجل';
    return 'مدفوع';
}

function getSubscriptionPaymentMeta(item) {
    const remainingText = `المتبقي ${formatNumber(convertCurrencyAmount(item.outstandingAmount || 0, item.currency, appState.currency))} ${appState.currency}`;

    if (item.paymentMethod === 'أجل' && item.paymentStatus === 'paid') {
        return `أجل - تم السداد`;
    }

    if (item.paymentStatus === 'due') {
        return `استحقاق ${formatDate(item.dueDate || item.endDate)} - ${remainingText}`;
    }

    return `${item.paymentMethod} - ${remainingText}`;
}

function exportSubscriptionsCsv() {
    const rows = [['العميل', 'الخدمات', 'من', 'إلى', 'الحالة', 'الدفع']];
    (appState.subscriptionRecords || []).forEach((item) => {
        rows.push([
            item.customerName,
            item.services.map((service) => service.name).join(' | '),
            item.startDate,
            item.endDate,
            getSubscriptionStatusLabel(item),
            getPaymentStatusLabel(item.paymentStatus)
        ]);
    });
    const csv = rows.map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
    copyToClipboard(csv, 'ملف CSV');
}

function clearCustomerForm() {
    appState.editingCustomerId = null;
    customerModalTitle.textContent = 'إضافة عميل';
    submitCustomerBtn.textContent = 'حفظ العميل';
    document.getElementById('customerFirstName').value = '';
    document.getElementById('customerLastName').value = '';
    document.getElementById('customerCountryCode').value = '';
    document.getElementById('customerPhoneNumber').value = '';
    document.getElementById('customerFullPhone').value = '';
    document.getElementById('customerEmail').value = '';
}

function syncServiceTypeSelection(type) {
    serviceCategory.value = type;
    serviceTypeCards.forEach((card) => {
        card.classList.toggle('active', card.dataset.serviceTypeCard === type);
    });
}

function syncSelectedPricingRow(durationValue) {
    serviceDuration.value = String(durationValue);
    servicePricingRows.forEach((row) => {
        row.classList.toggle('active', row.dataset.durationRow === String(durationValue));
    });
    syncPricingInputs();
}

function syncPricingInputs() {
    const activeDuration = serviceDuration.value || '1';
    const activeSellInput = document.querySelector(`[data-price-kind="sell"][data-duration-value="${activeDuration}"]`);
    servicePrice.value = activeSellInput ? activeSellInput.value || '0' : '0';
}

function fillServicePricingTable(service) {
    const pricingTable = service.durationPricing || {};

    servicePricingRows.forEach((row) => {
        const durationValue = row.dataset.durationRow;
        const sellInput = row.querySelector('[data-price-kind="sell"]');
        const costInput = row.querySelector('[data-price-kind="cost"]');
        const rowData = pricingTable[durationValue] || {};

        if (sellInput) {
            sellInput.value = rowData.sell ?? (String(service.duration) === durationValue ? service.price : 0);
        }

        if (costInput) {
            costInput.value = rowData.cost ?? 0;
        }
    });

    syncSelectedPricingRow(String(service.duration || 1));
}

function openServiceModalForCreate() {
    clearServiceForm();
    syncServiceTypeSelection(appState.activeServiceType);
    serviceModalTitle.textContent = 'إضافة خدمة جديدة';
    submitServiceBtn.textContent = 'حفظ الخدمة';
    openModal('serviceModal');
    updateServiceDateVisibility();
}

function submitService() {
    const selectedType = serviceCategory.value;
    const selectedName = serviceName.value.trim();
    const selectedDuration = Number(serviceDuration.value);
    const pricingMode = servicePricingMode.value;
    const endDate = serviceEndDate.value;
    const selectedCurrency = serviceCurrency.value || appState.currency;
    const price = Number(servicePrice.value);
    const durationPricing = {};

    servicePricingRows.forEach((row) => {
        const durationValue = row.dataset.durationRow;
        const sellInput = row.querySelector('[data-price-kind="sell"]');
        const costInput = row.querySelector('[data-price-kind="cost"]');
        durationPricing[durationValue] = {
            sell: Number(sellInput?.value || 0),
            cost: Number(costInput?.value || 0)
        };
    });

    if (!selectedName || !selectedDuration || !servicePrice.value.trim()) {
        showToast('يرجى تعبئة اسم الخدمة والمدة والسعر.', 'خطأ', 'error');
        return;
    }

    if (Number.isNaN(price) || price <= 0) {
        showToast('يرجى إدخال سعر صحيح للخدمة.', 'خطأ', 'error');
        return;
    }

    if (pricingMode === 'dated' && !endDate) {
        showToast('حدد تاريخ الانتهاء عند اختيار المدة بالتاريخ.', 'خطأ', 'error');
        return;
    }

    const record = {
        id: appState.editingServiceId || Date.now(),
        type: selectedType,
        name: selectedName,
        duration: selectedDuration,
        pricingMode,
        currency: selectedCurrency,
        endDate: pricingMode === 'dated' ? endDate : formatDuration(selectedDuration),
        price,
        customerId: null,
        customerName: '',
        subscriberEmail: '',
        subscriberPassword: '',
        privateAccounts: [],
        emailEntries: [],
        durationPricing
    };

    if (appState.editingServiceId) {
        const currentRecord = appState.serviceRecords.find((service) => service.id === appState.editingServiceId);
        if (currentRecord) {
            record.customerId = currentRecord.customerId || null;
            record.customerName = currentRecord.customerName || '';
            record.subscriberEmail = currentRecord.subscriberEmail || '';
            record.subscriberPassword = currentRecord.subscriberPassword || '';
            record.privateAccounts = currentRecord.privateAccounts || [];
            record.emailEntries = currentRecord.emailEntries || [];
            Object.assign(currentRecord, record);
        }
    } else {
        appState.serviceRecords.unshift(record);
    }

    syncTotals();
    renderServices();
    renderDashboard();
    prependNotification('success', 'تمت إضافة خدمة', `تم حفظ خدمة "${record.name}" بنجاح.`);
    closeModal('serviceModal');
    clearServiceForm();
    saveAppState();
    showToast(`تمت إضافة الخدمة "${record.name}".`, 'الخدمات', 'success');
    logEvent('add_service', record);
}

function clearServiceForm() {
    appState.editingServiceId = null;
    syncServiceTypeSelection(appState.activeServiceType);
    serviceName.value = '';
    serviceDuration.value = '1';
    servicePricingMode.value = 'sequential';
    serviceEndDate.value = '';
    servicePrice.value = '';
    populateCurrencySelect(serviceCurrency, appState.currency);
    serviceModalTitle.textContent = 'إضافة خدمة جديدة';
    submitServiceBtn.textContent = 'حفظ الخدمة';
    serviceSellPriceInputs.forEach((input) => {
        input.value = '0';
    });
    serviceCostPriceInputs.forEach((input) => {
        input.value = '0';
    });
    syncSelectedPricingRow('1');
    updateServiceDateVisibility();
}

function updateServiceDateVisibility() {
    serviceCustomDateGroup.style.display = servicePricingMode.value === 'dated' ? 'block' : 'none';
}

function populateServiceCustomerOptions() {
    return;
}

function renderServices() {
    if (!servicesList || !servicesEmptyState) {
        return;
    }

    servicesList.querySelectorAll('.service-card').forEach((card) => card.remove());
    servicesList.querySelectorAll('.empty-search').forEach((item) => item.remove());

    const filteredServices = appState.serviceRecords.filter((service) => service.type === appState.activeServiceType);

    if (servicesCountLabel) {
        servicesCountLabel.textContent = `${formatNumber(filteredServices.length)} خدمة`;
    }

    if (!filteredServices.length) {
        servicesEmptyState.style.display = 'block';
        return;
    }

    servicesEmptyState.style.display = 'none';

    filteredServices.forEach((service) => {
        const card = document.createElement('article');
        card.className = 'service-card';
        card.dataset.serviceOpen = service.id;
        card.innerHTML = `
            <div class="service-card-header">
                <div class="service-main-col">
                    <div class="service-icon-box">#</div>
                    <div>
                        <h3 class="service-name">${service.name}</h3>
                        <p class="service-meta">${service.type === 'private' ? 'خدمة خاصة' : 'خدمة مشتركة'}</p>
                    </div>
                </div>
                <span class="service-badge ${service.type === 'private' ? 'private' : 'shared'}">${service.type === 'private' ? 'خاص' : 'مشترك'}</span>
            </div>
            <div class="service-details">
                <div class="service-detail">
                    <span class="service-detail-label">الحسابات</span>
                    <span class="service-detail-value">${service.type === 'private' ? `${getPrivateAccountCount(service)} إيميل` : `${service.emailEntries.length} إيميل`}</span>
                </div>
                <div class="service-detail">
                    <span class="service-detail-label">المشتركين</span>
                    <span class="service-detail-value">${service.type === 'private' ? `${getPrivateAccountCount(service)} خاص` : `${getSharedCustomerCount(service)} مشترك`}</span>
                </div>
                <div class="service-detail">
                    <span class="service-detail-label">المدة</span>
                    <span class="service-detail-value">${formatDuration(service.duration)}</span>
                </div>
                <div class="service-detail">
                    <span class="service-detail-label">السعر</span>
                    <span class="service-detail-value">${formatNumber(service.price)} ${service.currency || appState.currency}</span>
                </div>
                <div class="service-detail">
                    <span class="service-detail-label">${service.pricingMode === 'dated' ? 'تاريخ الانتهاء' : 'نوع المدة'}</span>
                    <span class="service-detail-value">${service.endDate}</span>
                </div>
            </div>
            <div class="service-card-actions">
                <button class="service-action-btn primary" type="button" data-service-open="${service.id}">دخول الخدمة</button>
                <button class="service-action-btn" type="button" data-service-edit="${service.id}">تعديل</button>
                <button class="service-action-btn danger" type="button" data-service-delete="${service.id}">حذف</button>
            </div>
        `;

        servicesList.appendChild(card);
    });

    bindServiceActionButtons();
}

function formatDuration(months) {
    const map = {
        1: 'شهر',
        2: 'شهرين',
        3: '3 أشهر',
        6: '6 أشهر',
        12: 'سنة'
    };

    return map[months] || `${months} شهر`;
}

function bindServiceActionButtons() {
    document.querySelectorAll('.service-card').forEach((card) => {
        card.addEventListener('click', () => {
            openServiceDetails(Number(card.dataset.serviceOpen));
        });
    });

    document.querySelectorAll('[data-service-open]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            openServiceDetails(Number(button.dataset.serviceOpen));
        });
    });

    document.querySelectorAll('[data-service-edit]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            editService(Number(button.dataset.serviceEdit));
        });
    });

    document.querySelectorAll('[data-service-delete]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteService(Number(button.dataset.serviceDelete));
        });
    });
}

function openServiceDetails(serviceId) {
    const service = appState.serviceRecords.find((item) => item.id === serviceId);
    if (!service) {
        return;
    }

    appState.activeServiceId = serviceId;
    normalizeSharedService(service);
    normalizePrivateService(service);
    servicesOverview.style.display = 'none';
    serviceDetailPage.style.display = 'block';
    serviceDetailName.textContent = service.name;
    serviceDetailMeta.textContent = `النوع: ${service.type === 'private' ? 'خاص' : 'مشترك'} - المدة: ${formatDuration(service.duration)} - السعر: ${formatNumber(service.price)} ${service.currency || appState.currency}`;
    serviceEntrySearchInput.value = '';
    serviceEntryEmail.value = '';
    serviceEntryPassword.value = '';
    serviceEntryForm.style.display = 'none';
    serviceEntryPasswordGroup.style.display = 'block';
    toggleServiceEntryFormBtn.textContent = 'إضافة إيميل';
    appState.activeSharedEmailId = service.emailEntries[0]?.id || null;
    renderActiveServiceEntries();
}

function closeServiceDetailsPage() {
    appState.activeServiceId = null;
    appState.activeSharedEmailId = null;
    servicesOverview.style.display = 'block';
    serviceDetailPage.style.display = 'none';
    serviceLinkedCustomers.style.display = 'none';
    serviceEntryForm.style.display = 'none';
}

function toggleServiceEntryForm() {
    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    if (!service) {
        return;
    }

    serviceEntryForm.style.display = serviceEntryForm.style.display === 'none' ? 'block' : 'none';
    serviceEntryPasswordGroup.style.display = 'block';
}

function saveInlineServiceEntry() {
    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    if (!service) {
        return;
    }

    const email = serviceEntryEmail.value.trim();
    const password = serviceEntryPassword.value.trim();

    if (!email || !isValidEmail(email)) {
        showToast('أدخل إيميلًا صحيحًا.', 'خطأ', 'error');
        return;
    }

    if (!password) {
        showToast('أدخل الباسورد.', 'خطأ', 'error');
        return;
    }

    if (service.type === 'private') {
        normalizePrivateService(service);
        if (service.privateAccounts.some((account) => account.email.toLowerCase() === email.toLowerCase())) {
            showToast('هذا الإيميل مضاف بالفعل.', 'تنبيه', 'warning');
            return;
        }

        service.privateAccounts.unshift({
            id: Date.now(),
            email,
            password
        });
    } else {
        normalizeSharedService(service);
        if (service.emailEntries.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
            showToast('هذا الإيميل مضاف بالفعل.', 'تنبيه', 'warning');
            return;
        }

        service.emailEntries.unshift({
            id: Date.now(),
            email,
            password,
            createdAt: Date.now(),
            customers: []
        });
        appState.activeSharedEmailId = service.emailEntries[0].id;
    }

    serviceEntryEmail.value = '';
    serviceEntryPassword.value = '';
    serviceEntryForm.style.display = 'none';
    renderActiveServiceEntries();
    renderServices();
    saveAppState();
    showToast('تمت إضافة الإيميل بنجاح.', 'الخدمات', 'success');
}

function renderActiveServiceEntries() {
    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    if (!service) {
        return;
    }

    serviceEntriesList.innerHTML = '';
    serviceLinkedCustomers.style.display = 'none';

    if (service.type === 'private') {
        normalizePrivateService(service);
        const searchValue = serviceEntrySearchInput.value.trim().toLowerCase();
        const filteredAccounts = service.privateAccounts.filter((account) => {
            if (!searchValue) {
                return true;
            }
            return account.email.toLowerCase().includes(searchValue);
        });

        if (!filteredAccounts.length) {
            serviceEntriesList.innerHTML = '<div class="empty-search">لا توجد نتائج أو لا توجد إيميلات مضافة بعد.</div>';
            return;
        }

        filteredAccounts.forEach((account) => {
            const item = document.createElement('div');
            item.className = 'service-member-item private-account-item';
            item.innerHTML = `
                <div class="private-account-content">
                    <div class="service-member-name">${account.email}</div>
                    <div class="service-member-meta">الباسورد: ${account.password || 'غير مضاف'}</div>
                </div>
                <div class="private-account-actions">
                    <button class="entry-copy-btn" type="button" data-copy-value="${account.email}" data-copy-label="الإيميل">⧉</button>
                    <button class="entry-copy-btn" type="button" data-copy-value="${account.password || ''}" data-copy-label="كلمة المرور">⧉</button>
                    <button class="private-account-btn" type="button" data-private-edit="${account.id}">تعديل</button>
                    <button class="private-account-btn danger" type="button" data-private-delete="${account.id}">حذف</button>
                </div>
            `;
            serviceEntriesList.appendChild(item);
        });

        serviceEntriesList.querySelectorAll('[data-copy-value]').forEach((button) => {
            button.addEventListener('click', async (event) => {
                event.stopPropagation();
                const value = button.dataset.copyValue || '';
                const label = button.dataset.copyLabel || 'النص';
                if (!value) {
                    showToast(`لا توجد ${label} لنسخها.`, 'تنبيه', 'warning');
                    return;
                }
                await copyToClipboard(value, label);
            });
        });

        serviceEntriesList.querySelectorAll('[data-private-edit]').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                const account = service.privateAccounts.find((item) => item.id === Number(button.dataset.privateEdit));
                if (!account) {
                    return;
                }
                serviceEntryEmail.value = account.email;
                serviceEntryPassword.value = account.password || '';
                serviceEntryForm.style.display = 'block';
                service.privateAccounts = service.privateAccounts.filter((item) => item.id !== account.id);
                renderActiveServiceEntries();
                renderServices();
                saveAppState();
            });
        });

        serviceEntriesList.querySelectorAll('[data-private-delete]').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                service.privateAccounts = service.privateAccounts.filter((item) => item.id !== Number(button.dataset.privateDelete));
                renderActiveServiceEntries();
                renderServices();
                saveAppState();
                showToast('تم حذف الحساب الخاص.', 'الخدمات', 'success');
            });
        });

        return;
    }

    normalizeSharedService(service);
    const searchValue = serviceEntrySearchInput.value.trim().toLowerCase();
    const filteredEmails = service.emailEntries.filter((entry) => {
        if (!searchValue) {
            return true;
        }
        return entry.email.toLowerCase().includes(searchValue);
    });

    if (!filteredEmails.length) {
        serviceEntriesList.innerHTML = '<div class="empty-search">لا توجد نتائج أو لا توجد إيميلات مضافة بعد.</div>';
        return;
    }

    filteredEmails.forEach((entry) => {
        const item = document.createElement('div');
        item.className = `service-entry-row ${entry.id === appState.activeSharedEmailId ? 'active' : ''}`;
        item.innerHTML = `
            <button class="service-entry-menu-trigger" type="button" data-entry-menu="${entry.id}">...</button>
            <span class="service-entry-cell">${formatDate(entry.createdAt || entry.id)}</span>
            <span class="service-entry-cell"><span class="entry-count-badge">${entry.customers.length}</span></span>
            <button class="service-entry-cell entry-users-btn" type="button" data-entry-users="${entry.id}">${entry.customers.length} مستخدم</button>
            <span class="service-entry-cell entry-copy-cell">
                <span>${entry.password || 'غير مضاف'}</span>
                <button class="entry-copy-btn" type="button" data-copy-value="${entry.password || ''}" data-copy-label="كلمة المرور">⧉</button>
            </span>
            <span class="service-entry-cell service-entry-email entry-copy-cell">
                <span>${entry.email}</span>
                <button class="entry-copy-btn" type="button" data-copy-value="${entry.email}" data-copy-label="الإيميل">⧉</button>
            </span>
            <div class="service-entry-menu" data-entry-menu-panel="${entry.id}">
                <button type="button" data-entry-manage-users="${entry.id}">إدارة المستخدمين</button>
                <button type="button" data-copy-value="${entry.email}" data-copy-label="الإيميل">نسخ الإيميل</button>
                <button type="button" data-copy-value="${entry.password || ''}" data-copy-label="كلمة المرور">نسخ كلمة المرور</button>
                <button type="button" data-entry-edit="${entry.id}">تحديث الإيميل والباسورد</button>
                <button type="button" class="danger" data-entry-delete="${entry.id}">حذف</button>
            </div>
        `;
        item.addEventListener('click', () => {
            appState.activeSharedEmailId = entry.id;
            renderActiveServiceEntries();
            renderSelectedSharedEmailCustomers(service, entry);
        });
        serviceEntriesList.appendChild(item);
    });

    serviceEntriesList.insertAdjacentHTML('afterbegin', `
        <div class="service-entry-head">
            <span class="service-entry-cell entry-actions"></span>
            <span class="service-entry-cell">تاريخ الإضافة</span>
            <span class="service-entry-cell">عدد المشتركين</span>
            <span class="service-entry-cell">المستخدمون</span>
            <span class="service-entry-cell">كلمة المرور</span>
            <span class="service-entry-cell">الإيميل</span>
        </div>
    `);

    const activeEntry = filteredEmails.find((entry) => entry.id === appState.activeSharedEmailId) || filteredEmails[0];
    if (activeEntry) {
        appState.activeSharedEmailId = activeEntry.id;
        renderSelectedSharedEmailCustomers(service, activeEntry);
    }

    serviceEntriesList.querySelectorAll('[data-entry-users]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            openSharedEntryUsersModal(Number(button.dataset.entryUsers));
        });
    });

    serviceEntriesList.querySelectorAll('[data-entry-manage-users]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            openSharedEntryUsersModal(Number(button.dataset.entryManageUsers));
        });
    });

    serviceEntriesList.querySelectorAll('[data-entry-menu]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const entryId = button.dataset.entryMenu;
            serviceEntriesList.querySelectorAll('.service-entry-menu.show').forEach((menu) => {
                if (menu.dataset.entryMenuPanel !== entryId) {
                    menu.classList.remove('show');
                }
            });
            const panel = serviceEntriesList.querySelector(`[data-entry-menu-panel="${entryId}"]`);
            panel?.classList.toggle('show');
        });
    });

    serviceEntriesList.querySelectorAll('[data-entry-edit]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const entry = service.emailEntries.find((item) => item.id === Number(button.dataset.entryEdit));
            if (!entry) {
                return;
            }
            serviceEntryEmail.value = entry.email;
            serviceEntryPassword.value = entry.password || '';
            serviceEntryForm.style.display = 'block';
            service.emailEntries = service.emailEntries.filter((item) => item.id !== entry.id);
            appState.activeSharedEmailId = service.emailEntries[0]?.id || null;
            renderActiveServiceEntries();
            saveAppState();
        });
    });

    serviceEntriesList.querySelectorAll('[data-copy-value]').forEach((button) => {
        button.addEventListener('click', async (event) => {
            event.stopPropagation();
            const value = button.dataset.copyValue || '';
            const label = button.dataset.copyLabel || 'النص';
            if (!value) {
                showToast(`لا توجد ${label} لنسخها.`, 'تنبيه', 'warning');
                return;
            }
            await copyToClipboard(value, label);
        });
    });

    serviceEntriesList.querySelectorAll('[data-entry-delete]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            service.emailEntries = service.emailEntries.filter((item) => item.id !== Number(button.dataset.entryDelete));
            appState.activeSharedEmailId = service.emailEntries[0]?.id || null;
            renderActiveServiceEntries();
            renderServices();
            saveAppState();
            showToast('تم حذف الإيميل المشترك.', 'الخدمات', 'success');
        });
    });
}

function renderSelectedSharedEmailCustomers(service, entry) {
    serviceLinkedCustomers.style.display = 'block';
    serviceLinkedCustomersTitle.textContent = `العملاء المرتبطون بـ ${entry.email}`;
    serviceLinkedCustomersList.innerHTML = '';

    if (!entry.customers.length) {
        serviceLinkedCustomersList.innerHTML = '<div class="empty-search">لا يوجد عملاء مشتركين على هذا الإيميل بعد.</div>';
        return;
    }

    entry.customers.forEach((customer) => {
        const item = document.createElement('div');
        item.className = 'service-member-item';
        item.innerHTML = `
            <div>
                <div class="service-member-name">${customer.fullName}</div>
                <div class="service-member-meta">${entry.email}</div>
            </div>
        `;
        serviceLinkedCustomersList.appendChild(item);
    });
}

function openSharedEntryUsersModal(entryId) {
    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    if (!service) {
        return;
    }

    normalizeSharedService(service);
    const entry = service.emailEntries.find((item) => item.id === entryId);
    if (!entry) {
        return;
    }

    appState.activeSharedUsersEntryId = entryId;
    sharedUsersModalTitle.textContent = 'إدارة المستخدمين';
    sharedUsersModalEmail.textContent = entry.email;
    populateSharedUsersCustomerSelect(entry);
    renderSharedUsersList(entry);
    openModal('sharedUsersModal');
}

function populateSharedUsersCustomerSelect(entry) {
    if (!sharedCustomerSelect) {
        return;
    }

    sharedCustomerSelect.innerHTML = '<option value="">اختر العميل</option>';
    const linkedIds = new Set(entry.customers.map((customer) => customer.id));

    appState.customerRecords
        .filter((customer) => !linkedIds.has(customer.id))
        .forEach((customer) => {
            const option = document.createElement('option');
            option.value = String(customer.id);
            option.textContent = `${customer.fullName} - ${customer.phone}`;
            sharedCustomerSelect.appendChild(option);
        });
}

function renderSharedUsersList(entry) {
    if (!sharedUsersList) {
        return;
    }

    sharedUsersList.innerHTML = '';

    if (!entry.customers.length) {
        sharedUsersList.innerHTML = '<div class="empty-search">لا يوجد مستخدمون مرتبطون بهذا الإيميل بعد.</div>';
        return;
    }

    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    const otherEntries = (service?.emailEntries || []).filter((item) => item.id !== entry.id);

    entry.customers.forEach((customer) => {
        const moveOptions = otherEntries.length
            ? otherEntries.map((item) => `<option value="${item.id}">${item.email}</option>`).join('')
            : '<option value="">لا يوجد إيميل آخر</option>';
        const item = document.createElement('div');
        item.className = 'linked-user-card';
        item.innerHTML = `
            <div class="linked-user-body">
                <div class="linked-user-name">${customer.fullName}</div>
                <div class="linked-user-meta">${customer.phone} • ${customer.email || 'غير مضاف'}</div>
                <span class="linked-user-badge">عميل مربوط</span>
                <div class="linked-user-actions">
                    <button class="linked-user-action delete" type="button" data-linked-customer-delete="${customer.id}">حذف</button>
                    <div class="linked-user-move">
                        <select data-linked-customer-move-target="${customer.id}">
                            <option value="">اختر إيميل للنقل</option>
                            ${moveOptions}
                        </select>
                        <button class="linked-user-action move" type="button" data-linked-customer-move="${customer.id}">نقل</button>
                    </div>
                </div>
            </div>
            <div class="linked-user-avatar">${getCustomerInitials(customer.fullName)}</div>
        `;
        sharedUsersList.appendChild(item);
    });

    sharedUsersList.querySelectorAll('[data-linked-customer-delete]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            removeCustomerFromSharedEntry(Number(button.dataset.linkedCustomerDelete));
        });
    });

    sharedUsersList.querySelectorAll('[data-linked-customer-move]').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const customerId = Number(button.dataset.linkedCustomerMove);
            const targetSelect = sharedUsersList.querySelector(`[data-linked-customer-move-target="${customerId}"]`);
            const targetEntryId = Number(targetSelect?.value || 0);
            if (!targetEntryId) {
                showToast('اختر الإيميل الذي تريد نقل العميل إليه.', 'تنبيه', 'warning');
                return;
            }
            moveCustomerToSharedEntry(customerId, targetEntryId);
        });
    });
}

function addCustomerToSharedEntry() {
    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    if (!service) {
        return;
    }

    const entry = service.emailEntries.find((item) => item.id === appState.activeSharedUsersEntryId);
    if (!entry) {
        return;
    }

    const customerId = Number(sharedCustomerSelect.value);
    if (!customerId) {
        showToast('اختر عميلًا من القائمة أولًا.', 'تنبيه', 'warning');
        return;
    }

    const customer = appState.customerRecords.find((item) => item.id === customerId);
    if (!customer) {
        return;
    }

    if (entry.customers.some((item) => item.id === customer.id)) {
        showToast('هذا العميل مربوط بالفعل بهذا الإيميل.', 'تنبيه', 'warning');
        return;
    }

    entry.customers.push({
        id: customer.id,
        fullName: customer.fullName,
        phone: customer.phone,
        email: customer.email
    });

    appState.activeSharedEmailId = entry.id;
    populateSharedUsersCustomerSelect(entry);
    renderSharedUsersList(entry);
    renderActiveServiceEntries();
    renderSelectedSharedEmailCustomers(service, entry);
    renderServices();
    saveAppState();
    showToast(`تم ربط "${customer.fullName}" بهذا الإيميل.`, 'الخدمات', 'success');
}

function removeCustomerFromSharedEntry(customerId) {
    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    if (!service) {
        return;
    }

    const entry = service.emailEntries.find((item) => item.id === appState.activeSharedUsersEntryId);
    if (!entry) {
        return;
    }

    entry.customers = entry.customers.filter((item) => item.id !== customerId);
    populateSharedUsersCustomerSelect(entry);
    renderSharedUsersList(entry);
    renderActiveServiceEntries();
    renderSelectedSharedEmailCustomers(service, entry);
    renderServices();
    saveAppState();
    showToast('تم فك ارتباط العميل من هذا الإيميل.', 'الخدمات', 'success');
}

function moveCustomerToSharedEntry(customerId, targetEntryId) {
    const service = appState.serviceRecords.find((item) => item.id === appState.activeServiceId);
    if (!service) {
        return;
    }

    const currentEntry = service.emailEntries.find((item) => item.id === appState.activeSharedUsersEntryId);
    const targetEntry = service.emailEntries.find((item) => item.id === targetEntryId);
    if (!currentEntry || !targetEntry) {
        return;
    }

    const customer = currentEntry.customers.find((item) => item.id === customerId);
    if (!customer) {
        return;
    }

    if (targetEntry.customers.some((item) => item.id === customerId)) {
        showToast('هذا العميل مربوط بالفعل بالإيميل المحدد.', 'تنبيه', 'warning');
        return;
    }

    currentEntry.customers = currentEntry.customers.filter((item) => item.id !== customerId);
    targetEntry.customers.push(customer);

    populateSharedUsersCustomerSelect(currentEntry);
    renderSharedUsersList(currentEntry);
    renderActiveServiceEntries();
    renderSelectedSharedEmailCustomers(service, currentEntry);
    renderServices();
    saveAppState();
    showToast(`تم نقل "${customer.fullName}" إلى ${targetEntry.email}.`, 'الخدمات', 'success');
}

function getCustomerInitials(fullName) {
    return String(fullName || '')
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join('')
        .toUpperCase() || 'ع';
}

function formatDate(value) {
    return new Date(value || Date.now()).toLocaleDateString('ar-SA');
}

async function copyToClipboard(value, label) {
    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(value);
        } else {
            const helper = document.createElement('textarea');
            helper.value = value;
            helper.setAttribute('readonly', '');
            helper.style.position = 'absolute';
            helper.style.left = '-9999px';
            document.body.appendChild(helper);
            helper.select();
            document.execCommand('copy');
            document.body.removeChild(helper);
        }

        showToast(`تم نسخ ${label}.`, 'نسخ', 'success');
    } catch (error) {
        showToast(`تعذر نسخ ${label}.`, 'خطأ', 'error');
    }
}

function editService(serviceId) {
    const service = appState.serviceRecords.find((item) => item.id === serviceId);
    if (!service) {
        return;
    }

    appState.editingServiceId = service.id;
    serviceModalTitle.textContent = 'تعديل خدمة';
    submitServiceBtn.textContent = 'حفظ التعديل';
    syncServiceTypeSelection(service.type);
    serviceName.value = service.name;
    serviceDuration.value = String(service.duration);
    servicePricingMode.value = service.pricingMode;
    serviceEndDate.value = service.pricingMode === 'dated' ? service.endDate : '';
    servicePrice.value = service.price;
    populateCurrencySelect(serviceCurrency, service.currency || appState.currency);
    fillServicePricingTable(service);
    updateServiceDateVisibility();
    openModal('serviceModal');
}

function deleteService(serviceId) {
    const serviceIndex = appState.serviceRecords.findIndex((item) => item.id === serviceId);
    if (serviceIndex === -1) {
        return;
    }

    const [removedService] = appState.serviceRecords.splice(serviceIndex, 1);
    if (appState.activeServiceId === removedService.id) {
        closeServiceDetailsPage();
    }
    syncTotals();
    renderServices();
    renderDashboard();
    saveAppState();
    showToast(`تم حذف الخدمة "${removedService.name}".`, 'الخدمات', 'success');
}

function normalizeSharedService(service) {
    if (service.type !== 'shared') {
        return;
    }

    if (!Array.isArray(service.emailEntries)) {
        service.emailEntries = [];
    }

    service.emailEntries = service.emailEntries.map((entry) => ({
        ...entry,
        password: entry.password || '',
        createdAt: entry.createdAt || entry.id || Date.now(),
        customers: Array.isArray(entry.customers) ? entry.customers : []
    }));
}

function normalizePrivateService(service) {
    if (service.type !== 'private') {
        return;
    }

    if (!Array.isArray(service.privateAccounts)) {
        service.privateAccounts = [];
    }

    if (service.subscriberEmail && !service.privateAccounts.some((account) => account.email === service.subscriberEmail)) {
        service.privateAccounts.unshift({
            id: Date.now(),
            email: service.subscriberEmail,
            password: service.subscriberPassword || ''
        });
    }
}

function renderPrivateAccounts(service) {
    privateAccountsList.innerHTML = '';
    const searchValue = privateEmailSearchInput.value.trim().toLowerCase();
    const filteredAccounts = service.privateAccounts.filter((account) => {
        if (!searchValue) {
            return true;
        }

        return account.email.toLowerCase().includes(searchValue);
    });

    if (!filteredAccounts.length) {
        const empty = document.createElement('div');
        empty.className = 'empty-search';
        empty.textContent = searchValue ? 'لا توجد نتائج لهذا الإيميل.' : 'لا توجد إيميلات مضافة لهذه الخدمة بعد.';
        privateAccountsList.appendChild(empty);
        return;
    }

    filteredAccounts.forEach((account) => {
        const item = document.createElement('div');
        item.className = 'service-member-item';
        item.innerHTML = `
            <div>
                <div class="service-member-name">${account.email}</div>
                <div class="service-member-meta">الباسورد: ${account.password || 'غير مضاف'}</div>
            </div>
            <span class="service-item-badge">مضاف</span>
        `;
        privateAccountsList.appendChild(item);
    });
}

function getActiveEmailEntry(service) {
    normalizeSharedService(service);
    return service.emailEntries.find((entry) => entry.id === appState.activeSharedEmailId) || null;
}

function getSharedCustomerCount(service) {
    normalizeSharedService(service);
    return service.emailEntries.reduce((total, entry) => total + entry.customers.length, 0);
}

function getPrivateAccountCount(service) {
    normalizePrivateService(service);
    return service.privateAccounts.length;
}

function syncTotals() {
    appState.totals.customers = appState.customerRecords.length;
    appState.totals.services = appState.serviceRecords.length;
    appState.totals.subscriptions = appState.subscriptionRecords.length;
    appState.totals.expiring = appState.subscriptionRecords.filter((item) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const endDate = new Date(item.endDate);
        endDate.setHours(0, 0, 0, 0);
        const diffDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
        return diffDays >= 0 && diffDays <= 7;
    }).length;
}

function syncServiceTabs() {
    serviceTabs.forEach((tab) => {
        tab.classList.toggle('active', tab.dataset.serviceType === appState.activeServiceType);
    });
}

function saveAppState() {
    reconcileAllCustomerFinancials();
    reconcileSubscriptionsFromPayments();
    const stateToSave = {
        currency: appState.currency,
        activePaymentsCurrency: appState.activePaymentsCurrency,
        activeDashboardCurrency: appState.activeDashboardCurrency,
        activeReportsRange: appState.activeReportsRange,
        currencies: appState.currencies,
        items: appState.items,
        customerRecords: appState.customerRecords,
        serviceRecords: appState.serviceRecords,
        subscriptionRecords: appState.subscriptionRecords,
        customerSequence: appState.customerSequence,
        totals: appState.totals,
        activeServiceType: appState.activeServiceType
    };

    localStorage.setItem('subsflow_dashboard_state', JSON.stringify(stateToSave));
}

function loadAppState() {
    const rawState = localStorage.getItem('subsflow_dashboard_state');
    if (!rawState) {
        return;
    }

    try {
        const parsedState = JSON.parse(rawState);
        appState.currency = parsedState.currency || appState.currency;
        appState.activePaymentsCurrency = parsedState.activePaymentsCurrency || appState.currency;
        appState.activeDashboardCurrency = parsedState.activeDashboardCurrency || appState.currency;
        appState.activeReportsRange = parsedState.activeReportsRange || appState.activeReportsRange;
        appState.currencies = normalizeCurrencies(parsedState.currencies || appState.currencies);
        appState.items = parsedState.items || [];
        appState.customerRecords = (parsedState.customerRecords || []).map((customer) => {
            normalizeCustomerFinancials(customer);
            return customer;
        });
        appState.serviceRecords = (parsedState.serviceRecords || []).map((service) => ({
            ...service,
            currency: service.currency || appState.currency
        }));
        appState.subscriptionRecords = (parsedState.subscriptionRecords || []).map((subscription) => {
            normalizeSubscriptionFinancials(subscription);
            return subscription;
        });
        reconcileAllCustomerFinancials();
        reconcileSubscriptionsFromPayments();
        appState.customerSequence = parsedState.customerSequence || 0;
        appState.totals = { ...appState.totals, ...(parsedState.totals || {}) };
        appState.activeServiceType = parsedState.activeServiceType || 'private';
    } catch (error) {
        console.error('Failed to load local state', error);
    }
}

function renderCustomers() {
    reconcileAllCustomerFinancials();
    if (!customersList || !customersEmptyState) {
        return;
    }

    customersList.querySelectorAll('.customer-card').forEach((card) => card.remove());
    customersList.querySelectorAll('.empty-search').forEach((item) => item.remove());

    if (!appState.customerRecords.length) {
        customersEmptyState.style.display = 'block';
        return;
    }

    const searchValue = customerSearchInput.value.trim().toLowerCase();
    const filteredCustomers = appState.customerRecords.filter((customer) => {
        if (!searchValue) {
            return true;
        }

        return [
            customer.fullName,
            String(customer.customerNumber),
            customer.phone
        ].some((value) => String(value).toLowerCase().includes(searchValue));
    });

    customersEmptyState.style.display = 'none';

    if (!filteredCustomers.length) {
        const emptySearch = document.createElement('div');
        emptySearch.className = 'empty-search';
        emptySearch.textContent = 'لا توجد نتائج مطابقة لبحثك.';
        customersList.appendChild(emptySearch);
        return;
    }

    filteredCustomers.forEach((customer) => {
        normalizeCustomerFinancials(customer);
        const customerDebt = getCustomerTotalDebt(customer);
        const card = document.createElement('article');
        card.className = `customer-card ${customer.status === 'inactive' ? 'inactive' : ''}`;
        card.innerHTML = `
            <div class="customer-card-header">
                <div>
                    <h3 class="customer-name">${customer.fullName}</h3>
                    <p class="customer-meta">عميل رقم ${formatNumber(customer.customerNumber)}</p>
                </div>
                <span class="customer-badge">${customer.status === 'inactive' ? 'موقوف' : 'نشط'}</span>
            </div>
            <div class="customer-debt-line">المديونية الحالية: ${formatMoney(customerDebt)}</div>
            <div class="customer-card-actions">
                <button class="customer-action-btn" type="button" data-customer-action="edit" data-customer-id="${customer.id}">تعديل</button>
                <button class="customer-action-btn" type="button" data-customer-action="toggle" data-customer-id="${customer.id}">${customer.status === 'inactive' ? 'تفعيل' : 'إيقاف'}</button>
                <button class="customer-action-btn danger" type="button" data-customer-action="delete" data-customer-id="${customer.id}">حذف</button>
            </div>
        `;

        customersList.appendChild(card);
    });

    bindCustomerActionButtons();
}

function bindCustomerActionButtons() {
    document.querySelectorAll('[data-customer-action]').forEach((button) => {
        button.addEventListener('click', () => {
            const customerId = Number(button.dataset.customerId);
            const action = button.dataset.customerAction;

            if (action === 'edit') {
                editCustomer(customerId);
            }

            if (action === 'toggle') {
                toggleCustomerStatus(customerId);
            }

            if (action === 'delete') {
                deleteCustomer(customerId);
            }
        });
    });
}

function openCustomerModalForCreate() {
    clearCustomerForm();
    openModal('customerModal');
}

function editCustomer(customerId) {
    const customer = appState.customerRecords.find((item) => item.id === customerId);
    if (!customer) {
        return;
    }

    appState.editingCustomerId = customer.id;
    customerModalTitle.textContent = 'تعديل عميل';
    submitCustomerBtn.textContent = 'حفظ التعديل';
    document.getElementById('customerFirstName').value = customer.firstName;
    document.getElementById('customerLastName').value = customer.lastName;
    document.getElementById('customerCountryCode').value = '';
    document.getElementById('customerPhoneNumber').value = '';
    document.getElementById('customerFullPhone').value = customer.phone;
    document.getElementById('customerEmail').value = customer.email === 'غير مضاف' ? '' : customer.email;
    openModal('customerModal');
}

function toggleCustomerStatus(customerId) {
    const customer = appState.customerRecords.find((item) => item.id === customerId);
    if (!customer) {
        return;
    }

    customer.status = customer.status === 'inactive' ? 'active' : 'inactive';
    renderCustomers();
    renderPayments();
    renderInvoices();
    saveAppState();
    showToast(
        customer.status === 'inactive' ? `تم إيقاف "${customer.fullName}".` : `تم تفعيل "${customer.fullName}".`,
        'العملاء',
        'info'
    );
}

function deleteCustomer(customerId) {
    const customerIndex = appState.customerRecords.findIndex((item) => item.id === customerId);
    if (customerIndex === -1) {
        return;
    }

    const [removedCustomer] = appState.customerRecords.splice(customerIndex, 1);
    appState.totals.customers = appState.customerRecords.length;
    renderCustomers();
    renderDashboard();
    renderPayments();
    renderInvoices();
    saveAppState();
    showToast(`تم حذف "${removedCustomer.fullName}".`, 'العملاء', 'success');
    prependNotification('warning', 'تم حذف عميل', `تم حذف "${removedCustomer.fullName}" من القائمة.`);
}

function prependNotification(type, title, text) {
    const notificationsList = document.getElementById('notificationsList');
    const icons = {
        success: '✅',
        info: 'ℹ️',
        warning: '⚠️',
        error: '❌'
    };

    const item = document.createElement('div');
    item.className = `notification-item ${type}`;
    item.innerHTML = `
        <span class="notification-icon">${icons[type] || icons.info}</span>
        <div class="notification-content">
            <p class="notification-title">${title}</p>
            <p class="notification-text">${text}</p>
            <span class="notification-time">الآن</span>
        </div>
    `;

    notificationsList.prepend(item);
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showToast(message, title = '', type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <div class="toast-content">
            ${title ? `<div class="toast-title">${title}</div>` : ''}
            <div class="toast-message">${message}</div>
        </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function setupTouchSupport() {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const swipeThreshold = 50;

        if (diff < -swipeThreshold && window.innerWidth <= 768) {
            openSidebar();
        }

        if (diff > swipeThreshold && window.innerWidth <= 768) {
            closeSidebar();
        }
    });
}

function setupCardEffects() {
    document.querySelectorAll('.stat-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
}

function setupFocusEffects() {
    document.querySelectorAll('button, a, input, textarea').forEach((element) => {
        element.addEventListener('focus', function () {
            this.style.outline = '2px solid var(--primary-blue)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function () {
            this.style.outline = 'none';
        });
    });
}

function setupLoadAnimations() {
    window.addEventListener('load', () => {
        document.querySelectorAll('.stat-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'all 0.5s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 70);
        });
    });
}

function logEvent(eventName, data = {}) {
    console.log(`[${new Date().toLocaleTimeString('ar-SA')}] ${eventName}`, data);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

window.SubsFlow = {
    openModal,
    closeModal,
    setActivePage,
    toggleSidebar,
    closeSidebar,
    openSidebar,
    renderDashboard
};
