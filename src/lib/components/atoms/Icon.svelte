<script lang="ts">
  import InstagramIcon from '$lib/assets/instagram.svg?raw';
	import EmailIcon from '$lib/assets/email-outline.svg?raw';
	import YoutubeIcon from '$lib/assets/youtube.svg?raw';
	import TiktokIcon from '$lib/assets/tiktok.svg?raw';
	import FacebookIcon from '$lib/assets/facebook.svg?raw';
	import type { IconType } from '../../types';

  const Icons: Record<string, string> = {
		instagram: InstagramIcon,
		email: EmailIcon,
		youtube: YoutubeIcon,
		tiktok: TiktokIcon,
		facebook: FacebookIcon
	};

  const { icon }: { icon: IconType } = $props();
</script>

{@html Icons[icon]}
