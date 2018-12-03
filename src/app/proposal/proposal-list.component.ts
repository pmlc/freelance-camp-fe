import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent  {

	proposals: Proposal[] = [
			{
				id: 99,
				customer: "XYZ Company",
				portfolio_url: "http://portfolio.jordanhudgens.com",
				tools: "Ruby on Rails",
				estimated_hours: 200,
				hourly_rate: 80,
				weeks_to_complete: 3,
				client_email: "pmlc@iinet.net.au"
			},
			{
				id: 88,
				customer: "XYZ Company",
				portfolio_url: "http://portfolio.jordanhudgens.com",
				tools: "Ruby on Rails",
				estimated_hours: 200,
				hourly_rate: 80,
				weeks_to_complete: 3,
				client_email: "pmlc@iinet.net.au"
			}
  ]
  
}