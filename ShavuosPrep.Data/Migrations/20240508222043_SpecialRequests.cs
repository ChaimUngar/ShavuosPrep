using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShavuosPrep.Data.Migrations
{
    /// <inheritdoc />
    public partial class SpecialRequests : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SpecialRequests",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpecialRequests",
                table: "Orders");
        }
    }
}
