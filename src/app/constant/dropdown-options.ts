export class DropdownOptions {
    public static searchOptions = [
        {name: 'Geo-Search', value: 'Geo-Search'},
        {name: 'Custom', value: 'Custom'},
    ];

    public static dashboardSearchOptions = [
        {name: 'Devices', value: 'devices'},
        {name: 'Clusters', value: 'clusters'},
    ];

    public static chartFilterOptions = [
        {name: 'Last 1h', value: '1'},
        {name: 'Last 3h', value: '3'},
        {name: 'Last 12h', value: '12'},
    ];

    public static alarmOptions = {
        '700_dl_high_alm': 'Donor input > -30dBm - 700 MHz',
        '700_dl_low_alm': 'Donor input <  -80dBm - 700 MHz',
        '700_dl_pa_alm': 'Downlink Power Amplifier Fail - 700 MHz',
        '700_lna_alm': 'Low Noise Amplifier Hardware Failure - 700 MHz',
        '700_pll_alm': 'Phase Loop Lock harware failure - 700 MHz',
        '700_shutdown_alm': 'Critical alarm Amplifier shutdown - 700 MHz',
        '700_vswr_alm': 'Service passive system failure - 700 MHz',
        '800_dl_high_alm': 'Donor input > -30dBm - 800 MHz',
        '800_dl_low_alm': 'Donor input <  -80dBm - 800 MHz',
        '800_dl_pa_alm': 'Downlink Power Amplifier Fail - 800 MHz',
        '800_lna_alm': 'Low Noise Amplifier Hardware Failure - 800 MHz',
        '800_pll_alm': 'Phase Loop Lock hardware failure - 800 MHz',
        '800_shutdown_alm': 'Critical alarm Amplifier shutdown - 800 MHz',
        '800_vswr_alm ': 'Service passive system failure - 800 MHz',
        'ant_malfunction _alm ': 'Low input and/or VSWR software alarm',
        'booster_failure _alm ': 'Amplifier / temperature / high input/ shutdown software alarm',
        'dry_contact_alm_3_alm': 'user defined software alarm',
        'dry_contact_alm_4_alm': 'user defined software alarm',
        'ext_alm1_alm': 'Amplifier / temperature / high input/ shutdown dry contact alarm',
        'ext_alm2_alm': 'Low input and/or VSWR software alarm',
        'ext_alm3_alm': 'user defined dry contact alarm',
        'ext_alm4_alm': 'user defined dry contact alarm',
        'over_temp_alm': 'Enviromental temp > 140 •F',
        'summary_alm':  ' ',
    };

}
