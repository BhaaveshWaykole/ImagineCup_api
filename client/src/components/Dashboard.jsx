import {
	Card,
	Typography
} from "@material-tailwind/react";

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { Sidebar } from "./Sidebar";
import './dashboard.css';

export function Dashboard() {
	return (
		<div>
			<PowerBIEmbed
				embedConfig={{
					type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
					id: '6223e806-1b47-4445-8b61-96de58a9b27e',
					embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=6223e806-1b47-4445-8b61-96de58a9b27e&groupId=2c513aa0-d24a-48aa-81b3-667c8ede537c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsImRpc2FibGVBbmd1bGFySlNCb290c3RyYXBSZXBvcnRFbWJlZCI6dHJ1ZX19',
					accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyIsImtpZCI6ImtXYmthYTZxczh3c1RuQndpaU5ZT2hIYm5BdyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMjMwMzVkMWYtMTMzYy00NGI1LWIyYWQtYjNhZWYxN2JhYWExLyIsImlhdCI6MTcwNzQ5NTU0NiwibmJmIjoxNzA3NDk1NTQ2LCJleHAiOjE3MDc1MDAyODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFQQTE1UTVGUnU5MitqSzlVN0YvbWQ0b01QRU5yb0FrdzJXQm1oNkNFZTFxcmRUZVdQQzZqc3BoS0NmNU9HT1dZIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiYnRlY2gyMDIxIiwiZ2l2ZW5fbmFtZSI6InN3YXlhbS5wZW5kZ2FvbmthciIsImlwYWRkciI6IjIwMi4xNzkuNjkuODgiLCJuYW1lIjoic3dheWFtLnBlbmRnYW9ua2FyLmJ0ZWNoMjAyMSIsIm9pZCI6IjM3YWQ3MTQyLTQwMzYtNGVjZi05NDk3LTAzNDllZjlhM2ZkYSIsInB1aWQiOiIxMDAzMjAwMTk2QTBERjVDIiwicmgiOiIwLkFWUUFIMTBESXp3VHRVU3lyYk91OFh1cW9Ra0FBQUFBQUFBQXdBQUFBQUFBQUFDaUFIMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJZWVBKOHk2VDM2dm9jUHVfMEp1c3hENVoxQjBlNUYxUlplZ1hETUVjWHQ4IiwidGlkIjoiMjMwMzVkMWYtMTMzYy00NGI1LWIyYWQtYjNhZWYxN2JhYWExIiwidW5pcXVlX25hbWUiOiJzd2F5YW0ucGVuZGdhb25rYXIuYnRlY2gyMDIxQHNpdHB1bmUuZWR1LmluIiwidXBuIjoic3dheWFtLnBlbmRnYW9ua2FyLmJ0ZWNoMjAyMUBzaXRwdW5lLmVkdS5pbiIsInV0aSI6IkdqemVGZjlLb1VxTm96djZLcjVMQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.A-XwZKksBlbKi93WV2UNmOa0ZEkx9I_lVmVlgJ7WGoRBhZd9Q_LYjbdN7PDvNbtjPqTyEyGGKLTe2Rr1PJe_tz7b5Lvn-erEWAxj5Unt9TIsqSV5NoW81c2qUkY4AKoDqWIuSeelTWBDMNLO6C2SJ8XABOaRXY6XyIbHftzj2MA2nPvmUNUv5LleqHVe97FRNw-11LqdeBlmccZzroAojR48aOmEZ8xeqRsQ0PnuVg1eK5VTYBqf1U-WNhcgDfIngBO82pEBIn7q_NlVnCVU350IOqCATbPVb_EpPEpTb-AzcLvNM8v2fxmwae_z1e8872qw5dMDZifQs5bg3XpLBg",
					tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
					settings: {
						panes: {
							filters: {
								expanded: false,
								visible: false
							}
						}
					}
				}}

				eventHandlers={
					new Map([
						['loaded', function () { console.log('Report loaded'); }],
						['rendered', function () { console.log('Report rendered'); }],
						['error', function (event) { console.log(event.detail); }],
						['visualClicked', () => console.log('visual clicked')],
						['pageChanged', (event) => console.log(event)],
					])
				}

				cssClassName={"Embed-container"}

				getEmbeddedComponent={(embeddedReport) => {
					window.report = embeddedReport;
				}}
			/>
		</div>
	)
}