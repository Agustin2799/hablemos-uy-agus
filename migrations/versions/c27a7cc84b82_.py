"""empty message

Revision ID: c27a7cc84b82
Revises: 8c75daa8bab1
Create Date: 2024-08-06 15:28:04.929298

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c27a7cc84b82'
down_revision = '8c75daa8bab1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('especialidades',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('especialidad', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comentarios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_usuario', sa.Integer(), nullable=False),
    sa.Column('id_profesional', sa.Integer(), nullable=False),
    sa.Column('comentario', sa.Text(), nullable=False),
    sa.Column('puntaje', sa.Integer(), nullable=False),
    sa.Column('fecha_de_publicacion', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['id_profesional'], ['user.id'], ),
    sa.ForeignKeyConstraint(['id_usuario'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('nombre_usuario', sa.String(length=50), nullable=False))
        batch_op.add_column(sa.Column('apellido', sa.String(length=50), nullable=False))
        batch_op.add_column(sa.Column('descripcion', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('fecha_de_nacimiento', sa.Date(), nullable=False))
        batch_op.add_column(sa.Column('codigo_de_area', sa.String(length=10), nullable=False))
        batch_op.add_column(sa.Column('telefono', sa.String(length=20), nullable=False))
        batch_op.add_column(sa.Column('correo', sa.String(length=40), nullable=False))
        batch_op.add_column(sa.Column('clave', sa.String(length=80), nullable=False))
        batch_op.add_column(sa.Column('is_psicologo', sa.Boolean(), nullable=False))
        batch_op.add_column(sa.Column('foto', sa.String(length=255), nullable=True))
        batch_op.drop_constraint('user_email_key', type_='unique')
        batch_op.create_unique_constraint(None, ['telefono'])
        batch_op.create_unique_constraint(None, ['correo'])
        batch_op.drop_column('password')
        batch_op.drop_column('email')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_constraint(None, type_='unique')
        batch_op.create_unique_constraint('user_email_key', ['email'])
        batch_op.drop_column('foto')
        batch_op.drop_column('is_psicologo')
        batch_op.drop_column('clave')
        batch_op.drop_column('correo')
        batch_op.drop_column('telefono')
        batch_op.drop_column('codigo_de_area')
        batch_op.drop_column('fecha_de_nacimiento')
        batch_op.drop_column('descripcion')
        batch_op.drop_column('apellido')
        batch_op.drop_column('nombre_usuario')

    op.drop_table('comentarios')
    op.drop_table('especialidades')
    # ### end Alembic commands ###
