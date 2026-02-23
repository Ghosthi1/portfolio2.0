
export interface FeaturedProjectData {
	title: string;
	hook: string;
	tech?: string;
	flex?: string;
	caseStudyHref?: string;
	githubHref?: string;
	liveHref?: string;
	demoHref?: string;
	media?:
		| {
				kind: 'video';
				src: string;
				poster?: string;
				alt?: string;
				loop?: boolean;
				muted?: boolean;
				playsInline?: boolean;
		  }
		| {
				kind: 'image';
				src: string;
				alt: string;
		  };
	id?: string;
	bulletPoints?: string[];
}
