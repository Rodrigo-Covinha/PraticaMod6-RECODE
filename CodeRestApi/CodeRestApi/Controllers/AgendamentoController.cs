using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CodeRestApi.Data;
using CodeRestApi.Model;

namespace CodeRestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgendamentoController : ControllerBase
    {
        private readonly DataContext _context;

        public AgendamentoController(DataContext context)
        {
            _context = context;
        }

        // GET: api/agendamento
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Agendamento>>> GetAgendamentos()
        {
            return await _context.Agendamentos.ToListAsync();
        }

        // GET: api/Agendamento/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Agendamento>> GetAgendamento(int id)
        {
            var agendamento = await _context.Agendamentos.FindAsync(id);

            if (agendamento == null)
            {
                return NotFound();
            }

            return agendamento;
        }

        // PUT: api/Agendamento/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutAgendamento(int id, [FromBody] Agendamento atualizado)
        {
            Agendamento agendamento = _context.Agendamentos.FirstOrDefault(agendamento => agendamento.Id == id);
            if (agendamento == null)
            {
                return NotFound();
            }

            agendamento.Origem = atualizado.Origem;
            agendamento.Destino = atualizado.Destino;
            agendamento.DataIda = atualizado.DataIda;
            agendamento.DataVolta = atualizado.DataVolta;
            agendamento.QtdAdulto = atualizado.QtdAdulto;
            agendamento.QtdCrianca = atualizado.QtdCrianca;
            agendamento.Classe = atualizado.Classe;

            _context.SaveChanges();

            return NoContent();
        }

        // POST: api/Agendamento
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Agendamento>> PostAgendamento(Agendamento agendamento)
        {
            _context.Agendamentos.Add(agendamento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAgendamento", new { id = agendamento.Id }, agendamento);
        }

        // DELETE: api/Agendamento/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAgendamento(int id)
        {
            var agendamento = await _context.Agendamentos.FindAsync(id);
            if (agendamento == null)
            {
                return NotFound();
            }

            _context.Agendamentos.Remove(agendamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AgendamentoExists(int id)
        {
            return _context.Agendamentos.Any(e => e.Id == id);
        }
    }
}
