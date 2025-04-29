// src/components/GymResult/Results/Results.types.ts

/**
 * Tek bir skor kalemini temsil eder
 * - d, e, pen: Zorluk, Uygulama, Ceza puanları (opsiyonel)
 * - total: Toplam puan
 * - label: "Score" veya benzeri bir başlık (opsiyonel)
 * - highlight: Vurgulanacaksa true
 */
export interface ScoreItem {
	d?: string;
	e?: string;
	pen?: string;
	total: string;
	label?: string;
	highlight?: boolean;
}

/**
 * Sonuç satırı verisi
 * - rank: Sıra
 * - country: Ülke kodu
 * - bib: Sporcu numarası
 * - name: Sporcu adı
 * - scores: Skor kalemleri dizisi
 */
export interface ResultRowData {
	rank: number;
	country: string;
	bib: string;
	name: string;
	scores: ScoreItem[];
}
