frappe.ui.ThemeSwitcher = class CustomThemeSwitcher
	extends frappe.ui.ThemeSwitcher {
	constructor() {
		super();
	}

	fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "light",
					label: ("Wtech Light"),
					info: ("Light Theme"),
				},
				{
					name: "dark",
					label: "Wtech Night",
					info: "Dark Theme",
				},
				{
					name: "automatic",
					label: "Automatic",
					info:
						"Uses system's theme to switch between light and dark mode",
				},
			];

			resolve(this.themes);
		});
	}
};

// custom_app.js in your custom app
frappe.ui.toolbar.Toolbar.prototype.get_app_logo_html = function () {
	return `<img class="erpnext-logo" src="/assets/wtech_theme/img/favicon.png" />`;
};
