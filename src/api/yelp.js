import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer S7XrBiCNfVMnpusgx0i1qmMuQNuurMHozDM-yihEmfP_yLlg5kxxMvdkpfw8KFhk7aYKnv6IboU8L5d8qGqDmcCKAWuhNl4S_E0--vNHGtiEvsd02kH1Ra7LIXDuXnYx',
	},
});

//S7XrBiCNfVMnpusgx0i1qmMuQNuurMHozDM-yihEmfP_yLlg5kxxMvdkpfw8KFhk7aYKnv6IboU8L5d8qGqDmcCKAWuhNl4S_E0--vNHGtiEvsd02kH1Ra7LIXDuXnYx
