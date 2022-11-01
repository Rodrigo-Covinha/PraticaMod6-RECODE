using Microsoft.OData.Edm;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeRestApi.Model
{
    [Table("agendamento")]
    public class Agendamento
    {
        [Column("id")]
        public int Id { get; set; }

        [Column(name: "origem")]
        public string Origem { get; set; }

        [Column(name: "destino")]
        public string Destino { get; set; }

        [Column(name: "data_ida")]
        public string DataIda { get; set; }

        [Column(name: "data_volta")]
        public string DataVolta { get; set; }

        [Column(name: "qtd_adulto")]
        public string QtdAdulto { get; set; }

        [Column(name: "qtd_crianca")]
        public string QtdCrianca { get; set; }

        [Column(name: "classe")]
        public string Classe { get; set; }
    }
}
