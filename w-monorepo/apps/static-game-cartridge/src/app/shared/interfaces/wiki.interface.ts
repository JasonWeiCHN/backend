export interface IWikiChartConfig {
  id: string;
  label: string;
}

export interface IContentItemConfig {
  id: string;
  title: string;
}

export interface IWikiChartItem {
  id: string;
  value: string;
}

export interface IContentItem {
  id: string;
  innerHTML: string;
}

export interface IWikiConfig {
  chart: IWikiChartConfig[];
  content: IContentItemConfig[];
}

export interface IWikiData {
  chart: Record<string, string>;
  content: Record<string, string>;
}

export interface IWikiDataMap {
  [key: string]: IWikiData;
}
