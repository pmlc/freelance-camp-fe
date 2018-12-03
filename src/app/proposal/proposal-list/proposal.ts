export interface Proposal {
	id?: number,
	customer?: string,
	portfolio_url: string = 'http://',
	tools?: string,
	estimated_hours?: number,
	hourly_rate?: number,
	weeks_to_complete?: number,
	client_email?: string,
}