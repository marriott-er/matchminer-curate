export interface Genomic {
    hugo_symbol?: string,
    annotated_variant?: string,
    matching_examples?: string,
    protein_change?: string,
    wildcard_protein_change?: string,
    variant_classification?: string,
    variant_category?: string,
    exon?: string,
    cnv_call?: string,
    wildtype?: string,
    no_hugo_symbol?: boolean,
    no_annotated_variant?: boolean,
    no_matching_examples?: boolean,
    no_protein_change?: boolean,
    no_wildcard_protein_change?: boolean,
    no_variant_classification?: boolean,
    no_variant_category?: boolean,
    no_exon?: boolean,
    no_cnv_call?: boolean
}